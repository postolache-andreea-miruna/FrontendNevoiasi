import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AdresaService } from 'src/app/services/adresa.service';

@Component({
  selector: 'app-dialog-add-adresa',
  templateUrl: './dialog-add-adresa.component.html',
  styleUrls: ['./dialog-add-adresa.component.scss']
})
export class DialogAddAdresaComponent {
  public adresaAddForm: FormGroup = new FormGroup({
    numestrada: new FormControl(''),
    numarbloc: new FormControl(0),
    numarap: new FormControl(0),
    codpostal: new FormControl(''),
    talentatnevoiasid: new FormControl(0),
  });

  constructor(
    private adresaService: AdresaService,
    private dialogRef: MatDialogRef<DialogAddAdresaComponent>
  ){}

  get numestrada(): AbstractControl{
    return this.adresaAddForm.get('numestrada') as AbstractControl;
  }

  get numarbloc(): AbstractControl{
    return this.adresaAddForm.get('numarbloc') as AbstractControl;
  }

  get numarap(): AbstractControl{
    return this.adresaAddForm.get('numarap') as AbstractControl;
  }

  get codpostal(): AbstractControl{
    return this.adresaAddForm.get('codpostal') as AbstractControl;
  }

  get talentatnevoiasid(): AbstractControl{
    return this.adresaAddForm.get('talentatnevoiasid') as AbstractControl;
  }

  

  public saveAdd(): void{
    console.log(this.adresaAddForm.value);
    this.adresaService.createAdresa(this.adresaAddForm.value).subscribe(
      (result) =>{
        this.dialogRef.close(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
