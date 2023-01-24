import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { CompetitieModel } from 'src/app/models/competitie-model';
import { CompetitieUpdateModel } from 'src/app/models/competitie-update-model';
import { CompetitiiService } from 'src/app/services/competitii.service';
import { DialogAddCompetitieComponent } from '../../shared/dialog-add-competitie/dialog-add-competitie.component';
import { DialogEditCompetitieComponent } from '../../shared/dialog-edit-competitie/dialog-edit-competitie.component';

@Component({
  selector: 'app-competitie',
  templateUrl: './competitie.component.html',
  styleUrls: ['./competitie.component.scss']
})
export class CompetitieComponent implements OnInit{
  public competitii: CompetitieModel[] = [];
  public competitieUpdate: CompetitieUpdateModel[] = [];
  public displayedColumns = ['id', 'numeCompetitie', 'profile', 'edit', 'delete']
  constructor(
    private competitiiiService: CompetitiiService,
    private router: Router,
    private dialog: MatDialog,
    public authGuard: AuthGuard
  ) { }

  ngOnInit() {
    this.competitiiiService.getCompetitii().subscribe(
      (result: CompetitieModel[]) => {
        console.log(result);
        this.competitii = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
  public goToCompetitieProfile(id: Number): void {
    this.router.navigate(['/comp/competitieid',id]);

  }
  public editCompetitie(comp:CompetitieUpdateModel): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    dialogConfig.data = comp;
    if (localStorage.getItem('token') != null && localStorage.getItem('RoleId') === 'AdministratorClubUser') 
    {
      const dialog = this.dialog.open(DialogEditCompetitieComponent,dialogConfig);
      dialog.afterClosed().subscribe((result) =>{
        if(result){
          console.log(result);
          this.competitii=result;
        }
      });
    }
  }
  public deleteCompetitie(id: Number): void{
    this.router.navigate(['comp/delete',id]);
  }
  public addNewCompetitie(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    if (localStorage.getItem('RoleId') === 'AdministratorClubUser')
    {
      const dialog = this.dialog.open(DialogAddCompetitieComponent,dialogConfig);
      dialog.afterClosed().subscribe();
    }
  }
}
