import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { AuthadminGuard } from 'src/app/authadmin.guard';
import { AuthdonatorGuard } from 'src/app/authdonator.guard';
import { AuthnevoiasGuard } from 'src/app/authnevoias.guard';
import { AdresaComponent } from './adresa/adresa.component';
import { AdresaidComponent } from './adresaid/adresaid.component';
import { StergadresaComponent } from './stergadresa/stergadresa.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'adresa',
    pathMatch:'full'
  },
  {
    path: 'adresa',
    component: AdresaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'adresaid/:id',
    component: AdresaidComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'delete/:id',
    component: StergadresaComponent,
    canActivate: [AuthadminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdreseRoutingModule { }
