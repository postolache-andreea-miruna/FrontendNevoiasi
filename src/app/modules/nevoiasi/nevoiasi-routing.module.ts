import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { AuthadminGuard } from 'src/app/authadmin.guard';
import { NevoiasComponent } from './nevoias/nevoias.component';
import { NevoiasidComponent } from './nevoiasid/nevoiasid.component';
import { StergnevoiasComponent } from './stergnevoias/stergnevoias.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'nevoias',
    pathMatch:'full'
  },
  {
    path: 'nevoias',
    component: NevoiasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'nevoiasid/:id',
    component: NevoiasidComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'delete/:id',
    component: StergnevoiasComponent,
    canActivate: [AuthadminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NevoiasiRoutingModule { }
