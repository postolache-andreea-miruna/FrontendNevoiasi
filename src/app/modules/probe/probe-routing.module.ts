import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { AuthadminGuard } from 'src/app/authadmin.guard';
import { ProbaComponent } from './proba/proba.component';

import { StergprobaComponent } from './stergproba/stergproba.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'proba',
    pathMatch:'full'
  },
  {
    path: 'proba',
    component: ProbaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'delete/:id',
    component: StergprobaComponent,
    canActivate: [AuthadminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProbeRoutingModule { }
