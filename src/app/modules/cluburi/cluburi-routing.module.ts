import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { AuthadminGuard } from 'src/app/authadmin.guard';
import { ClubComponent } from './club/club.component';
import { ClubidComponent } from './clubid/clubid.component';
import { StergclubComponent } from './stergclub/stergclub.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'club',
    pathMatch:'full'
  },
  {
    path: 'club',
    component: ClubComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clubid/:id',
    component: ClubidComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'delete/:id',
    component: StergclubComponent,
    canActivate: [AuthadminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CluburiRoutingModule { }
