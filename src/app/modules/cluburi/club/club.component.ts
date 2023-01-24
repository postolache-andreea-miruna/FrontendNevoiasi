import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { ClubUpdateModel } from 'src/app/models/club-update-model';
import { CluburiModel } from 'src/app/models/cluburi-model';
import { CluburiService } from 'src/app/services/cluburi.service';
import { DialogAddClubComponent } from '../../shared/dialog-add-club/dialog-add-club.component';
import { DialogAfisareAntrenoriClubComponent } from '../../shared/dialog-afisare-antrenori-club/dialog-afisare-antrenori-club.component';
import { DialogEditClubComponent } from '../../shared/dialog-edit-club/dialog-edit-club.component';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit{

  public cluburi: CluburiModel[] = [];
  public clubUpdate: ClubUpdateModel[] = [];
  public displayedColumns = ['id', 'numeClub','profile', 'edit', 'delete']
  constructor(
    private cluburiService: CluburiService,
    private router: Router,
    private dialog: MatDialog,
    public authGuard: AuthGuard
  ) { }

  ngOnInit() {
    this.cluburiService.getCluburi().subscribe(
      (result: CluburiModel[]) => {
        console.log(result);
        this.cluburi = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
  public goToClubProfile(id: Number): void {
    this.router.navigate(['/cl/clubid',id]);

  }
  public editClub(club:ClubUpdateModel): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    dialogConfig.data = club;
    if (localStorage.getItem('token') != null && localStorage.getItem('RoleId') === 'AdministratorClubUser')
    {
      const dialog = this.dialog.open(DialogEditClubComponent,dialogConfig);

      dialog.afterClosed().subscribe((result) =>{
        if(result){
          console.log(result);
          this.cluburi=result;
        }
      });
    }
  }
  public deleteClub(id: Number): void{
    this.router.navigate(['cl/delete',id]);
  }
  public addNewClub(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    if (localStorage.getItem('RoleId') === 'AdministratorClubUser')
    {
      const dialog = this.dialog.open(DialogAddClubComponent,dialogConfig);
      dialog.afterClosed().subscribe();
    }
  }

  public antrenoriClub(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    const dialog = this.dialog.open(DialogAfisareAntrenoriClubComponent,dialogConfig);
    dialog.afterClosed().subscribe();
  }
}
