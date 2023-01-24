import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { AuthadminGuard } from 'src/app/authadmin.guard';
import { SportComponent } from './sport/sport.component';
import { StergsportComponent } from './stergsport/stergsport.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sport',
    pathMatch:'full'
  },
  {
    path: 'sport',
    component: SportComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'delete/:id',
    component: StergsportComponent,
    canActivate: [AuthadminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SporturiRoutingModule { }
