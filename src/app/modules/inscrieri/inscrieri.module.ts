import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscrierebyIdNevoiasComponent } from './inscriereby-id-nevoias/inscriereby-id-nevoias.component';
import { InscrierebyIdAntrenorComponent } from './inscriereby-id-antrenor/inscriereby-id-antrenor.component';
import { InscrieriRoutingModule } from './inscrieri-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    InscrierebyIdNevoiasComponent,
    InscrierebyIdAntrenorComponent
  ],
  imports: [
    CommonModule,
    InscrieriRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    SharedModule
  ],
  exports: [
    MatCardModule,
  ]
  
})
export class InscrieriModule { }
