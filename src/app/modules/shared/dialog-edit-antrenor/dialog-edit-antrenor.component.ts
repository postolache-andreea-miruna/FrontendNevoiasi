import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AntrenorService } from 'src/app/services/antrenor.service';

@Component({
  selector: 'app-dialog-edit-antrenor',
  templateUrl: './dialog-edit-antrenor.component.html',
  styleUrls: ['./dialog-edit-antrenor.component.scss']
})
export class DialogEditAntrenorComponent implements OnInit{
  ngOnInit() { }
  public antrForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    numeAntrenor: new FormControl(''),
    aniExperienta: new FormControl(0),
  });

  constructor(
    private antrService: AntrenorService,
    private dialogRef: MatDialogRef<DialogEditAntrenorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    console.log(data);
    if(data){
      this.antrForm.patchValue(data);
    }
  }


  get id(): AbstractControl{
    return this.antrForm.get('id') as AbstractControl;
  }

  get numeAntrenor(): AbstractControl{
    return this.antrForm.get('numeAntrenor') as AbstractControl;
  }

  get aniExperienta(): AbstractControl{
    return this.antrForm.get('aniExperienta') as AbstractControl;
  }

  public save(): void{
    this.antrService.updateAntrenor(this.antrForm.value).subscribe(
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
