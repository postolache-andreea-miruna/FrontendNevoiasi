import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { NevoiasUpdateModel } from 'src/app/models/nevoias-update-model';
import { Nevoiasmodel } from 'src/app/models/nevoiasmodel';
import { NevoiasiService } from 'src/app/services/nevoiasi.service';
import { DialogAddEditComponent } from '../../shared/dialog-add-edit/dialog-add-edit.component';
import { DialogAddNevoiasComponent } from '../../shared/dialog-add-nevoias/dialog-add-nevoias.component';
import { DialogAfisareInscriereNevComponent } from '../../shared/dialog-afisare-inscriere-nev/dialog-afisare-inscriere-nev.component';
import { DialogAfiseazaBestComponent } from '../../shared/dialog-afiseaza-best/dialog-afiseaza-best.component';
import { DialogAfiseazaDonariDataComponent } from '../../shared/dialog-afiseaza-donari-data/dialog-afiseaza-donari-data.component';
import { DialogAfiseazaDonariNevComponent } from '../../shared/dialog-afiseaza-donari-nev/dialog-afiseaza-donari-nev.component';
import { DialogAfiseazaIsctoricComponent } from '../../shared/dialog-afiseaza-isctoric/dialog-afiseaza-isctoric.component';

@Component({
  selector: 'app-nevoias',
  templateUrl: './nevoias.component.html',
  styleUrls: ['./nevoias.component.scss']
})
export class NevoiasComponent implements OnInit {

  public nevoiasi: Nevoiasmodel[] = [];
  public nevoiasUpdate: NevoiasUpdateModel[] = [];
  public displayedColumns = ['id', 'numeNevoias', 'prenumeNevoias', 'sportTalent', 'deAjutat', 'email', 'telefon', 'profile', 'edit', 'delete']
  constructor(
    private nevoiasiService: NevoiasiService,
    private router: Router,
    private dialog: MatDialog,
    public authGuard: AuthGuard
  ) { }

  ngOnInit() {
    this.nevoiasiService.getTalentatNevoiasi().subscribe(
      (result: Nevoiasmodel[]) => {
        console.log(result);
        this.nevoiasi = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
  public goToNevoiasProfile(id: Number): void {
    this.router.navigate(['/nev/nevoiasid',id]);

  }
  public editNevoias(nevoias:NevoiasUpdateModel): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    dialogConfig.data = nevoias;
    if ((localStorage.getItem('token') != null && localStorage.getItem('RoleId') === 'AdministratorClubUser') 
    || (localStorage.getItem('token') != null && localStorage.getItem('RoleId') === 'NevoiasUser'))//|| localStorage.getItem('RoleId') === 'NevoiasUser')
    {
      console.log("administratorul");
      const dialog = this.dialog.open(DialogAddEditComponent,dialogConfig);

      dialog.afterClosed().subscribe((result) =>{
        if(result){
          console.log(result);
          this.nevoiasi=result;
        }
      });
    }
  }
  public deleteNevoias(id: Number): void{
    this.router.navigate(['nev/delete',id]);
  }
  public addNewNevoias(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    if (localStorage.getItem('RoleId') === 'AdministratorClubUser')
    {
      const dialog = this.dialog.open(DialogAddNevoiasComponent,dialogConfig);
      //console.log(localStorage.getItem('RoleId'));
      dialog.afterClosed().subscribe();
    }
  }

  public inscrieriNevoias(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    const dialog = this.dialog.open(DialogAfisareInscriereNevComponent,dialogConfig);
    dialog.afterClosed().subscribe();
  }

  public BestOfForNevoias(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    const dialog = this.dialog.open(DialogAfiseazaBestComponent,dialogConfig);
    dialog.afterClosed().subscribe();
  }

  public IstoricForNevoias(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    const dialog = this.dialog.open(DialogAfiseazaIsctoricComponent,dialogConfig);
    dialog.afterClosed().subscribe();
  }

  public DonariByData(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    const dialog = this.dialog.open(DialogAfiseazaDonariDataComponent,dialogConfig);
    dialog.afterClosed().subscribe();
  }

  public DonariByNev(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    const dialog = this.dialog.open(DialogAfiseazaDonariNevComponent,dialogConfig);
    dialog.afterClosed().subscribe();
  }
}
