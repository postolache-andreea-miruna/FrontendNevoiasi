import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { InscrierebyIdAntrenorComponent } from './inscriereby-id-antrenor/inscriereby-id-antrenor.component';
import { InscrierebyIdNevoiasComponent } from './inscriereby-id-nevoias/inscriereby-id-nevoias.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inscriereidNev',
    pathMatch:'full'
  },
  {
    path: 'inscriereidNev/:id',
    component: InscrierebyIdNevoiasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'inscreireidAntr/:id',
    component: InscrierebyIdAntrenorComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscrieriRoutingModule { }
