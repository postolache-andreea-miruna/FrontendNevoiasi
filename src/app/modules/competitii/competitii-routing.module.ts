import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { AuthadminGuard } from 'src/app/authadmin.guard';
import { CompetitieComponent } from './competitie/competitie.component';
import { CompetitieidComponent } from './competitieid/competitieid.component';
import { StergcompetitieComponent } from './stergcompetitie/stergcompetitie.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'competitie',
    pathMatch:'full'
  },
  {
    path: 'competitie',
    component: CompetitieComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'competitieid/:id',
    component: CompetitieidComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'delete/:id',
    component: StergcompetitieComponent,
    canActivate: [AuthadminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetitiiRoutingModule { }
