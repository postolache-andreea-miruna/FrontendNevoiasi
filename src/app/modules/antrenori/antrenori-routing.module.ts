import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { AuthadminGuard } from 'src/app/authadmin.guard';
import { AntrenorComponent } from './antrenor/antrenor.component';
import { AntrenorbyidComponent } from './antrenorbyid/antrenorbyid.component';
import { AntrenorbyidclubComponent } from './antrenorbyidclub/antrenorbyidclub.component';
import { AntrenorbyidsportComponent } from './antrenorbyidsport/antrenorbyidsport.component';
import { StergantrenorComponent } from './stergantrenor/stergantrenor.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'antrenor',
    pathMatch:'full'
  },
  {
    path: 'antrenor',
    component: AntrenorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'antrenorid/:id',
    component: AntrenorbyidComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'antrenoridclub/:id',
    component: AntrenorbyidclubComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'antrenoridsport/:id',
    component: AntrenorbyidsportComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'delete/:id',
    component: StergantrenorComponent,
    canActivate: [AuthadminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AntrenoriRoutingModule { }
