import { Component, Inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdresaService } from 'src/app/services/adresa.service';
import { DialogAddEditComponent } from '../dialog-add-edit/dialog-add-edit.component';

@Component({
  selector: 'app-dialog-edit-adresa',
  templateUrl: './dialog-edit-adresa.component.html',
  styleUrls: ['./dialog-edit-adresa.component.scss']
})
export class DialogEditAdresaComponent {
  ngOnInit() { }
  public adresaForm: FormGroup = new FormGroup({
    numeStrada: new FormControl(''),
    numarBloc: new FormControl(0),
    numarAp: new FormControl(0),
    codPostal: new FormControl(''),
  });

  constructor(
    private adresaService: AdresaService,
    private dialogRef: MatDialogRef<DialogEditAdresaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    console.log(data);
    if(data){
      this.adresaForm.patchValue(data);
    }
  }


  get numeStrada(): AbstractControl{
    return this.adresaForm.get('numeStrada') as AbstractControl;
  }

  get numarBloc(): AbstractControl{
    return this.adresaForm.get('numarBloc') as AbstractControl;
  }

  get numarAp(): AbstractControl{
    return this.adresaForm.get('numarAp') as AbstractControl;
  }

  get codPostal(): AbstractControl{
    return this.adresaForm.get('codPostal') as AbstractControl;
  }

  public save(): void{
    this.adresaService.updateAdresa(this.adresaForm.value).subscribe(
      (result) =>{
        console.log(result);
        this.dialogRef.close();
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
