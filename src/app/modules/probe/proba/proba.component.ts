import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { Probemodel } from 'src/app/models/probemodel';
import { ProbeService } from 'src/app/services/probe.service';
import { DialogAddProbaComponent } from '../../shared/dialog-add-proba/dialog-add-proba.component';
import { DialogEditProbaComponent } from '../../shared/dialog-edit-proba/dialog-edit-proba.component';
import { ProbeModule } from '../probe.module';

@Component({
  selector: 'app-proba',
  templateUrl: './proba.component.html',
  styleUrls: ['./proba.component.scss']
})
export class ProbaComponent implements OnInit{
  public probe: Probemodel[] = [];
  public probeUpdate: Probemodel[] = [];
  public displayedColumns = ['id', 'numeProba','edit', 'delete']
  constructor(
    private probaService: ProbeService,
    private router: Router,
    private dialog: MatDialog,
    public authGuard: AuthGuard
  ) { }

  ngOnInit() {
    this.probaService.getProbe().subscribe(
      (result: Probemodel[]) => {
        console.log(result);
        this.probe = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
  public editProba(proba:Probemodel): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    dialogConfig.data = proba;
    if (localStorage.getItem('token') != null && localStorage.getItem('RoleId') === 'AdministratorClubUser') 
    {
      const dialog = this.dialog.open(DialogEditProbaComponent,dialogConfig);

      dialog.afterClosed().subscribe((result) =>{
        if(result){
          console.log(result);
          this.probe=result;
        }
      });
    }
  }
  public deleteProba(id: Number): void{
    this.router.navigate(['pro/delete',id]);
  }
  public addNewProba(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    if (localStorage.getItem('RoleId') === 'AdministratorClubUser')
    {
      const dialog = this.dialog.open(DialogAddProbaComponent,dialogConfig);
      dialog.afterClosed().subscribe();
    }
  }
}
