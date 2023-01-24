import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProbaComponent } from './proba/proba.component';
import { StergprobaComponent } from './stergproba/stergproba.component';
import { ProbeRoutingModule } from './probe-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProbaComponent,
    StergprobaComponent
  ],
  imports: [
    CommonModule,
    ProbeRoutingModule,
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
export class ProbeModule { }
