import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AntrenorService } from 'src/app/services/antrenor.service';

@Component({
  selector: 'app-dialog-add-antrenor',
  templateUrl: './dialog-add-antrenor.component.html',
  styleUrls: ['./dialog-add-antrenor.component.scss']
})
export class DialogAddAntrenorComponent implements OnInit{
  public antrAddForm: FormGroup = new FormGroup({
    numeAntrenor: new FormControl(''),
    prenumeAntrenor: new FormControl(''),
    gen: new FormControl(''),
    aniExperienta: new FormControl(0),
    sportId: new FormControl(0),
    clubId: new FormControl(0),
  });

  constructor(
    private antrService: AntrenorService,
    private dialogRef: MatDialogRef<DialogAddAntrenorComponent>
  ){}

  get numeAntrenor(): AbstractControl{
    return this.antrAddForm.get('numeAntrenor') as AbstractControl;
  }

  get prenumeAntrenor(): AbstractControl{
    return this.antrAddForm.get('prenumeAntrenor') as AbstractControl;
  }
  
  get gen(): AbstractControl{
    return this.antrAddForm.get('gen') as AbstractControl;
  }

  get aniExperienta(): AbstractControl{
    return this.antrAddForm.get('aniExperienta') as AbstractControl;
  }

  get sportId(): AbstractControl{
    return this.antrAddForm.get('sportId') as AbstractControl;
  }

  get clubId(): AbstractControl{
    return this.antrAddForm.get('clubId') as AbstractControl;
  }
  ngOnInit(): void {
    
  }
  public saveAdd(): void{
    console.log(this.antrAddForm.value);
    this.antrService.createAntrenor(this.antrAddForm.value).subscribe(
      (result) =>{
        this.dialogRef.close(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
