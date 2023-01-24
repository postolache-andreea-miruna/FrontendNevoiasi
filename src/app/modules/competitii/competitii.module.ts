import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitieComponent } from './competitie/competitie.component';
import { CompetitieidComponent } from './competitieid/competitieid.component';
import { StergcompetitieComponent } from './stergcompetitie/stergcompetitie.component';
import { CompetitiiRoutingModule } from './competitii-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CompetitieComponent,
    CompetitieidComponent,
    StergcompetitieComponent
  ],
  imports: [
    CommonModule,
    CompetitiiRoutingModule,
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
export class CompetitiiModule { }
