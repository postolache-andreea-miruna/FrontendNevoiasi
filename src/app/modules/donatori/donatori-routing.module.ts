import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { AuthadminGuard } from 'src/app/authadmin.guard';
import { AuthdonatorGuard } from 'src/app/authdonator.guard';
import { AuthnevoiasGuard } from 'src/app/authnevoias.guard';
import { DonatorComponent } from './donator/donator.component';
import { DonatoridComponent } from './donatorid/donatorid.component';
import { StergdonatorComponent } from './stergdonator/stergdonator.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'donator',
    pathMatch:'full'
  },
  {
    path: 'donator',
    component: DonatorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'donatorid/:id',
    component: DonatoridComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'delete/:id',
    component: StergdonatorComponent,
    canActivate: [AuthadminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonatoriRoutingModule { }
