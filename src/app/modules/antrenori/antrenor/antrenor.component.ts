import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { AntrenorModel } from 'src/app/models/antrenor-model';
import { GetAntrenorUpdateModel } from 'src/app/models/get-antrenor-update-model';
import { AntrenoriService } from 'src/app/services/antrenori.service';
import { DialogAddAntrenorComponent } from '../../shared/dialog-add-antrenor/dialog-add-antrenor.component';
import { DialogAfisareInscriereLaAntrComponent } from '../../shared/dialog-afisare-inscriere-la-antr/dialog-afisare-inscriere-la-antr.component';
import { DialogEditAntrenorComponent } from '../../shared/dialog-edit-antrenor/dialog-edit-antrenor.component';

@Component({
  selector: 'app-antrenor',
  templateUrl: './antrenor.component.html',
  styleUrls: ['./antrenor.component.scss']
})
export class AntrenorComponent implements OnInit{

  public antrenori: AntrenorModel[] = [];
  public antrenorUpdate: GetAntrenorUpdateModel[] = [];
  public displayedColumns = ['id', 'numeAntrenor', 'prenumeAntrenor', 'numeSport', 'profile', 'edit', 'delete']
  constructor(
    private antrenoriService: AntrenoriService,
    private router: Router,
    private dialog: MatDialog,
    public authGuard: AuthGuard
  ) { }

  ngOnInit() {
    this.antrenoriService.getAntrenori().subscribe(
      (result: AntrenorModel[]) => {
        console.log(result);
        this.antrenori = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
  public goToAntrenorProfile(id: Number): void {
    this.router.navigate(['/antr/antrenorid',id]);

  }
  public editAntrenor(antr:GetAntrenorUpdateModel): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    dialogConfig.data = antr;
    if (localStorage.getItem('token') != null && localStorage.getItem('RoleId') === 'AdministratorClubUser') 
    {
      const dialog = this.dialog.open(DialogEditAntrenorComponent,dialogConfig);

      dialog.afterClosed().subscribe((result) =>{
        if(result){
          console.log(result);
          this.antrenori=result;
        }
      });
    }
  }
  public deleteAntrenor(id: Number): void{
    this.router.navigate(['antr/delete',id]);
  }
  public addNewAntrenor(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    if (localStorage.getItem('RoleId') === 'AdministratorClubUser')
    {
      const dialog = this.dialog.open(DialogAddAntrenorComponent,dialogConfig);
      dialog.afterClosed().subscribe();
    }
  }

  public inscriereLaAntrenor(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    const dialog = this.dialog.open(DialogAfisareInscriereLaAntrComponent,dialogConfig);
    dialog.afterClosed().subscribe();
  }

}
