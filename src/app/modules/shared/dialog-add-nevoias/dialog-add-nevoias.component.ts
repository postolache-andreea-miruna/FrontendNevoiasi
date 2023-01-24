import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NevoiasService } from 'src/app/services/nevoias.service';

@Component({
  selector: 'app-dialog-add-nevoias',
  templateUrl: './dialog-add-nevoias.component.html',
  styleUrls: ['./dialog-add-nevoias.component.scss']
})
export class DialogAddNevoiasComponent implements OnInit {
  public nevoiasAddForm: FormGroup = new FormGroup({
    gen: new FormControl(''),
    numeNevoias: new FormControl(''),
    prenumeNevoias: new FormControl(''),
    dataNastere: new FormControl('YYYY-MM-DDT00:00:00'),
    sportTalent: new FormControl(''),
    deAjutat: new FormControl(true),
    email: new FormControl(''),
    telefon: new FormControl('')
  });

  constructor(
    private nevoiasService: NevoiasService,
    private dialogRef: MatDialogRef<DialogAddNevoiasComponent>
  ){}

  get gen(): AbstractControl{
    return this.nevoiasAddForm.get('gen') as AbstractControl;
  }

  get numeNevoias(): AbstractControl{
    return this.nevoiasAddForm.get('numeNevoias') as AbstractControl;
  }

  get prenumeNevoias(): AbstractControl{
    return this.nevoiasAddForm.get('prenumeNevoias') as AbstractControl;
  }

  get dataNastere(): AbstractControl{
    return this.nevoiasAddForm.get('dataNastere') as AbstractControl;
  }

  get sportTalent(): AbstractControl{
    return this.nevoiasAddForm.get('sportTalent') as AbstractControl;
  }

  get deAjutat(): AbstractControl{
    return this.nevoiasAddForm.get('deAjutat') as AbstractControl;
  }

  get email(): AbstractControl{
    return this.nevoiasAddForm.get('email') as AbstractControl;
  }

  get telefon(): AbstractControl{
    return this.nevoiasAddForm.get('telefon') as AbstractControl;
  }

  ngOnInit(): void {
    
  }
  public saveAdd(): void{
    console.log(this.nevoiasAddForm.value);
    this.nevoiasService.createNevoias(this.nevoiasAddForm.value).subscribe(
      (result) =>{
        this.dialogRef.close(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
