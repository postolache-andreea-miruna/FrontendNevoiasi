import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportComponent } from './sport/sport.component';
import { StergsportComponent } from './stergsport/stergsport.component';
import { SporturiRoutingModule } from './sporturi-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SportComponent,
    StergsportComponent
  ],
  imports: [
    CommonModule,
    SporturiRoutingModule,
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
export class SporturiModule { }
