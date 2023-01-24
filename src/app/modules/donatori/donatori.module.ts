import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonatorComponent } from './donator/donator.component';
import { DonatoridComponent } from './donatorid/donatorid.component';
import { StergdonatorComponent } from './stergdonator/stergdonator.component';
import { DonatoriRoutingModule } from './donatori-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DonatorComponent,
    DonatoridComponent,
    StergdonatorComponent
  ],
  imports: [
    CommonModule,
    DonatoriRoutingModule,
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
export class DonatoriModule { }
