import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { DonatorModel } from 'src/app/models/donator-model';
import { DonatorUpdateModel } from 'src/app/models/donator-update-model';
import { DonatoriService } from 'src/app/services/donatori.service';
import { DialogAddDonatorComponent } from '../../shared/dialog-add-donator/dialog-add-donator.component';
import { DialogAfiseazaDonariDataComponent } from '../../shared/dialog-afiseaza-donari-data/dialog-afiseaza-donari-data.component';
import { DialogAfiseazaDonariDonComponent } from '../../shared/dialog-afiseaza-donari-don/dialog-afiseaza-donari-don.component';
import { DialogEditDonatorComponent } from '../../shared/dialog-edit-donator/dialog-edit-donator.component';

@Component({
  selector: 'app-donator',
  templateUrl: './donator.component.html',
  styleUrls: ['./donator.component.scss']
})
export class DonatorComponent implements OnInit{
  public donatori: DonatorModel[] = [];
  public donatorUpdate: DonatorUpdateModel[] = [];
  public displayedColumns = ['id', 'pseudonim','profile', 'edit', 'delete']
  constructor(
    private donatoriService: DonatoriService,
    private router: Router,
    private dialog: MatDialog,
    public authGuard: AuthGuard
  ) { }

  ngOnInit() {
    this.donatoriService.getDonatori().subscribe(
      (result: DonatorModel[]) => {
        console.log(result);
        this.donatori = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
  public goToDonatorProfile(id: Number): void {
    this.router.navigate(['/don/donatorid',id]);

  }
  public editDonator(donator:DonatorUpdateModel): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    dialogConfig.data = donator;
    if ((localStorage.getItem('token') != null && localStorage.getItem('RoleId') === 'AdministratorClubUser') 
    || (localStorage.getItem('token') != null && localStorage.getItem('RoleId') === 'DonatorUser'))
    {
      const dialog = this.dialog.open(DialogEditDonatorComponent,dialogConfig);

      dialog.afterClosed().subscribe((result) =>{
        if(result){
          console.log(result);
          this.donatori=result;
        }
      });
    }
  }
  public deleteDonator(id: Number): void{
    this.router.navigate(['don/delete',id]);
  }
  public addNewDonator(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    if (localStorage.getItem('RoleId') === 'AdministratorClubUser')
    {
      const dialog = this.dialog.open(DialogAddDonatorComponent,dialogConfig);
      dialog.afterClosed().subscribe();
    }
  }
  public DonariByData(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    const dialog = this.dialog.open(DialogAfiseazaDonariDataComponent,dialogConfig);
    dialog.afterClosed().subscribe();
  }
  public DonariMadeByDonator(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    const dialog = this.dialog.open(DialogAfiseazaDonariDonComponent,dialogConfig);
    dialog.afterClosed().subscribe();
  }

}
