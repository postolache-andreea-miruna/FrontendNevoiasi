import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { SportModel } from 'src/app/models/sport-model';
import { SporturiService } from 'src/app/services/sporturi.service';
import { DialogAddSportComponent } from '../../shared/dialog-add-sport/dialog-add-sport.component';
import { DialogAfisareAntrenoriSportComponent } from '../../shared/dialog-afisare-antrenori-sport/dialog-afisare-antrenori-sport.component';
import { DialogEditSportComponent } from '../../shared/dialog-edit-sport/dialog-edit-sport.component';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit{

  public sporturi: SportModel[] = [];
  public sportUpdate: SportModel[] = [];
  public displayedColumns = ['id', 'numeSport', 'edit', 'delete']
  constructor(
    private sporturiService: SporturiService,
    private router: Router,
    private dialog: MatDialog,
    public authGuard: AuthGuard
  ) { }

  ngOnInit() {
    this.sporturiService.getSporturi().subscribe(
      (result: SportModel[]) => {
        console.log(result);
        this.sporturi = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public editSport(sport:SportModel): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    dialogConfig.data = sport;
    if (localStorage.getItem('token') != null && localStorage.getItem('RoleId') === 'AdministratorClubUser')
    {
      const dialog = this.dialog.open(DialogEditSportComponent,dialogConfig);

      dialog.afterClosed().subscribe((result) =>{
        if(result){
          console.log(result);
          this.sporturi=result;
        }
      });
    }
  }
  public deleteSport(id: Number): void{
    this.router.navigate(['sp/delete',id]);
  }
  public addNewSport(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    if (localStorage.getItem('RoleId') === 'AdministratorClubUser')
    {
      const dialog = this.dialog.open(DialogAddSportComponent,dialogConfig);
      dialog.afterClosed().subscribe();
    }
  }

  public antrenoriSport(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    const dialog = this.dialog.open(DialogAfisareAntrenoriSportComponent,dialogConfig);
    dialog.afterClosed().subscribe();
  }

}
