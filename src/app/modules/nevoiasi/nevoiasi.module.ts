import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NevoiasComponent } from './nevoias/nevoias.component';
import { NevoiasiRoutingModule } from './nevoiasi-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NevoiasidComponent } from './nevoiasid/nevoiasid.component';
import { StergnevoiasComponent } from './stergnevoias/stergnevoias.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    NevoiasComponent,
    NevoiasidComponent,
    StergnevoiasComponent
  ],
  imports: [
    CommonModule,
    NevoiasiRoutingModule,
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
export class NevoiasiModule { }
