import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { AuthadminGuard } from 'src/app/authadmin.guard';
import { BestofComponent } from './bestof/bestof.component';
import { IstoricComponent } from './istoric/istoric.component';
import { IstoricbyidnevComponent } from './istoricbyidnev/istoricbyidnev.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'istoric',
    pathMatch:'full'
  },
  {
    path: 'istoric',
    component: IstoricComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'istoricNevId/:id',
    component: IstoricbyidnevComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'bestof/:id',
    component: BestofComponent,
    canActivate: [AuthadminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IstoriceRoutingModule { }
