import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogAddEditComponent } from './dialog-add-edit/dialog-add-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogAddNevoiasComponent } from './dialog-add-nevoias/dialog-add-nevoias.component';
import { DialogEditAdresaComponent } from './dialog-edit-adresa/dialog-edit-adresa.component';
import { DialogAddAdresaComponent } from './dialog-add-adresa/dialog-add-adresa.component';
import { DialogEditDonatorComponent } from './dialog-edit-donator/dialog-edit-donator.component';
import { DialogAddDonatorComponent } from './dialog-add-donator/dialog-add-donator.component';
import { DialogEditProbaComponent } from './dialog-edit-proba/dialog-edit-proba.component';
import { DialogAddProbaComponent } from './dialog-add-proba/dialog-add-proba.component';
import { DialogEditCompetitieComponent } from './dialog-edit-competitie/dialog-edit-competitie.component';
import { DialogAddCompetitieComponent } from './dialog-add-competitie/dialog-add-competitie.component';
import { DialogAddClubComponent } from './dialog-add-club/dialog-add-club.component';
import { DialogEditClubComponent } from './dialog-edit-club/dialog-edit-club.component';
import { DialogEditSportComponent } from './dialog-edit-sport/dialog-edit-sport.component';
import { DialogAddSportComponent } from './dialog-add-sport/dialog-add-sport.component';
import { DialogEditAntrenorComponent } from './dialog-edit-antrenor/dialog-edit-antrenor.component';
import { DialogAddAntrenorComponent } from './dialog-add-antrenor/dialog-add-antrenor.component';
import { DialogAfisareAntrenoriClubComponent } from './dialog-afisare-antrenori-club/dialog-afisare-antrenori-club.component';
import { DialogAfisareAntrenoriSportComponent } from './dialog-afisare-antrenori-sport/dialog-afisare-antrenori-sport.component';
import { DialogAfisareInscriereLaAntrComponent } from './dialog-afisare-inscriere-la-antr/dialog-afisare-inscriere-la-antr.component';
import { DialogAfisareInscriereNevComponent } from './dialog-afisare-inscriere-nev/dialog-afisare-inscriere-nev.component';
import { DialogAfiseazaBestComponent } from './dialog-afiseaza-best/dialog-afiseaza-best.component';
import { DialogAfiseazaIsctoricComponent } from './dialog-afiseaza-isctoric/dialog-afiseaza-isctoric.component';
import { DialogAfiseazaDonariDataComponent } from './dialog-afiseaza-donari-data/dialog-afiseaza-donari-data.component';
import { DialogAfiseazaDonariNevComponent } from './dialog-afiseaza-donari-nev/dialog-afiseaza-donari-nev.component';
import { DialogAfiseazaDonariDonComponent } from './dialog-afiseaza-donari-don/dialog-afiseaza-donari-don.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    DialogAddEditComponent,
    DialogAddNevoiasComponent,
    DialogEditAdresaComponent,
    DialogAddAdresaComponent,
    DialogEditDonatorComponent,
    DialogAddDonatorComponent,
    DialogEditProbaComponent,
    DialogAddProbaComponent,
    DialogEditCompetitieComponent,
    DialogAddCompetitieComponent,
    DialogAddClubComponent,
    DialogEditClubComponent,
    DialogEditSportComponent,
    DialogAddSportComponent,
    DialogEditAntrenorComponent,
    DialogAddAntrenorComponent,
    DialogAfisareAntrenoriClubComponent,
    DialogAfisareAntrenoriSportComponent,
    DialogAfisareInscriereLaAntrComponent,
    DialogAfisareInscriereNevComponent,
    DialogAfiseazaBestComponent,
    DialogAfiseazaIsctoricComponent,
    DialogAfiseazaDonariDataComponent,
    DialogAfiseazaDonariNevComponent,
    DialogAfiseazaDonariDonComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  entryComponents: [
    DialogAddEditComponent,
    DialogAddNevoiasComponent,
    DialogEditAdresaComponent,
    DialogAddAdresaComponent,
    DialogEditDonatorComponent,
    DialogAddDonatorComponent,
    DialogEditProbaComponent,
    DialogAddProbaComponent,
    DialogEditCompetitieComponent,
    DialogAddCompetitieComponent,
    DialogAddClubComponent,
    DialogEditClubComponent,
    DialogEditSportComponent,
    DialogAddSportComponent,
    DialogEditAntrenorComponent,
    DialogAddAntrenorComponent,    
    DialogAfisareAntrenoriClubComponent,
    DialogAfisareAntrenoriSportComponent,
    DialogAfisareInscriereLaAntrComponent,
    DialogAfisareInscriereNevComponent,
    DialogAfiseazaBestComponent,
    DialogAfiseazaIsctoricComponent,
  ],
  exports:[
    NavbarComponent
  ]
})
export class SharedModule { }
