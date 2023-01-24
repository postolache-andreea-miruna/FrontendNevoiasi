import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { AdresaModel } from 'src/app/models/adresa-model';
import { AdresaUpdateModel } from 'src/app/models/adresa-update-model';
import { AdreseService } from 'src/app/services/adrese.service';
import { DialogAddAdresaComponent } from '../../shared/dialog-add-adresa/dialog-add-adresa.component';
import { DialogEditAdresaComponent } from '../../shared/dialog-edit-adresa/dialog-edit-adresa.component';

@Component({
  selector: 'app-adresa',
  templateUrl: './adresa.component.html',
  styleUrls: ['./adresa.component.scss']
})
export class AdresaComponent implements OnInit{
  public adrese: AdresaModel[] = [];
  public adreseUpdate: AdresaUpdateModel[] = [];
  public displayedColumns = ['id', 'numeStrada', 'codPostal', 'talentatNevoiasNume','talentatNevoiasPrenume','profile', 'edit','delete']
  constructor(
    private adreseService: AdreseService,
    private router: Router,
    private dialog: MatDialog,
    public authGuard: AuthGuard
  ){ }

  ngOnInit(){
    this.adreseService.getAdrese().subscribe(
      (result: AdresaModel[]) => {
        console.log(result);
        this.adrese = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public goToAdressDetails(id: Number): void {
    this.router.navigate(['/add/adresaid',id]);
  }

  public deleteAdresa(id: Number): void{
    this.router.navigate(['add/delete',id]);
  }

  public editAdresa(adresa:AdresaUpdateModel): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    dialogConfig.data = adresa;
    if ((localStorage.getItem('token') != null && localStorage.getItem('RoleId') === 'AdministratorClubUser') 
    || (localStorage.getItem('token') != null && localStorage.getItem('RoleId') === 'NevoiasUser'))//|| localStorage.getItem('RoleId') === 'NevoiasUser')
    {
      const dialog = this.dialog.open(DialogEditAdresaComponent,dialogConfig);

      dialog.afterClosed().subscribe((result) =>{
        if(result){
          console.log(result);
          this.adrese=result;
        }
      });
    }
  }

  public addNewAdresa(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    if ((localStorage.getItem('token') != null && localStorage.getItem('RoleId') === 'AdministratorClubUser') 
    || (localStorage.getItem('token') != null && localStorage.getItem('RoleId') === 'NevoiasUser'))
    {
      const dialog = this.dialog.open(DialogAddAdresaComponent,dialogConfig);
      //console.log(localStorage.getItem('RoleId'));
      dialog.afterClosed().subscribe();
    }
  }
}
