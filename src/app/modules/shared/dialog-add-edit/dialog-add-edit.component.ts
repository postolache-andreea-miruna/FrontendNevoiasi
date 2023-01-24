import { createInjectableType } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NevoiasService } from 'src/app/services/nevoias.service';

@Component({
  selector: 'app-dialog-add-edit',
  templateUrl: './dialog-add-edit.component.html',
  styleUrls: ['./dialog-add-edit.component.scss']
})
export class DialogAddEditComponent implements OnInit{
  ngOnInit() { }
  public nevoiasForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    numeNevoias: new FormControl(''),
    deAjutat: new FormControl(0),
    email: new FormControl(''),
    telefon: new FormControl('')
  });

  constructor(
    private nevoiasService: NevoiasService,
    private dialogRef: MatDialogRef<DialogAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    console.log(data);
    if(data){
      this.nevoiasForm.patchValue(data);
    }
  }


  get id(): AbstractControl{
    return this.nevoiasForm.get('id') as AbstractControl;
  }

  get numeNevoias(): AbstractControl{
    return this.nevoiasForm.get('numeNevoias') as AbstractControl;
  }

  get deAjutat(): AbstractControl{
    return this.nevoiasForm.get('deAjutat') as AbstractControl;
  }

  get email(): AbstractControl{
    return this.nevoiasForm.get('email') as AbstractControl;
  }

  get telefon(): AbstractControl{
    return this.nevoiasForm.get('telefon') as AbstractControl;
  }

  public save(): void{
    this.nevoiasService.updateNevoias(this.nevoiasForm.value).subscribe(
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
