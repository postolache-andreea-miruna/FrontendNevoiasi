import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './modules/homepage/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch:'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard] //daca nu esti logat te trimit spre register
  },
  {
    path: 'auth',
    loadChildren: () => import('src/app/modules/authentication/authentication.module').then(m => m.AuthenticationModule)//se ia din modul
  },
  {
    path: 'nev',
    loadChildren: () => import('src/app/modules/nevoiasi/nevoiasi.module').then(m => m.NevoiasiModule)//se ia din modul
  },
  {
    path: 'add',
    loadChildren: () => import('src/app/modules/adrese/adrese.module').then(a => a.AdreseModule)
  },
  {
    path: 'don',
    loadChildren: () => import('src/app/modules/donatori/donatori.module').then(d => d.DonatoriModule)
  },
  {
    path: 'pro',
    loadChildren: () => import('src/app/modules/probe/probe.module').then(p => p.ProbeModule)
  },
  {
    path: 'comp',
    loadChildren: () => import('src/app/modules/competitii/competitii.module').then(p => p.CompetitiiModule)
  },
  {
    path: 'cl',
    loadChildren: () => import('src/app/modules/cluburi/cluburi.module').then(p => p.CluburiModule)
  },
  {
    path: 'sp',
    loadChildren: () => import('src/app/modules/sporturi/sporturi.module').then(p => p.SporturiModule)
  },
  {
    path: 'antr',
    loadChildren: () => import('src/app/modules/antrenori/antrenori.module').then(p => p.AntrenoriModule)
  },
  {
    path: 'inscr',
    loadChildren: () => import('src/app/modules/inscrieri/inscrieri.module').then(p => p.InscrieriModule)
  },
  {
    path: 'ist',
    loadChildren: () => import('src/app/modules/istorice/istorice.module').then(p => p.IstoriceModule)
  },
  {
    path: 'don',
    loadChildren: () => import('src/app/modules/donari/donari.module').then(p => p.DonariModule)
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
