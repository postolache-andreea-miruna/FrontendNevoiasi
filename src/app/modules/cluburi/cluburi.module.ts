import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClubComponent } from './club/club.component';
import { ClubidComponent } from './clubid/clubid.component';
import { StergclubComponent } from './stergclub/stergclub.component';
import { CluburiRoutingModule } from './cluburi-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ClubComponent,
    ClubidComponent,
    StergclubComponent
  ],
  imports: [
    CommonModule,
    CluburiRoutingModule,
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
export class CluburiModule { }
