import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonareidnevComponent } from './donareidnev/donareidnev.component';
import { DonareiddonComponent } from './donareiddon/donareiddon.component';
import { DonaredatadonComponent } from './donaredatadon/donaredatadon.component';
import { DonariRoutingModule } from './donari-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DonareidnevComponent,
    DonareiddonComponent,
    DonaredatadonComponent
  ],
  imports: [
    CommonModule,
    DonariRoutingModule,
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
export class DonariModule { }
