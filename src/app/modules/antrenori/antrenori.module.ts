import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntrenorComponent } from './antrenor/antrenor.component';
import { AntrenorbyidComponent } from './antrenorbyid/antrenorbyid.component';
import { AntrenorbyidclubComponent } from './antrenorbyidclub/antrenorbyidclub.component';
import { AntrenorbyidsportComponent } from './antrenorbyidsport/antrenorbyidsport.component';
import { StergantrenorComponent } from './stergantrenor/stergantrenor.component';
import { AntrenoriRoutingModule } from './antrenori-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AntrenorComponent,
    AntrenorbyidComponent,
    AntrenorbyidclubComponent,
    AntrenorbyidsportComponent,
    StergantrenorComponent
  ],
  imports: [
    CommonModule,
    AntrenoriRoutingModule,
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
export class AntrenoriModule { }
