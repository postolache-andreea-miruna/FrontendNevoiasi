import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { DonaredatadonComponent } from './donaredatadon/donaredatadon.component';
import { DonareiddonComponent } from './donareiddon/donareiddon.component';
import { DonareidnevComponent } from './donareidnev/donareidnev.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'donareidnev',
    pathMatch:'full'
  },
  {
    path: 'donareidnev/:id',
    component: DonareidnevComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'doanreiddon/:id',
    component: DonareiddonComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'donaredatadonatie/:id',
    component: DonaredatadonComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonariRoutingModule { }
