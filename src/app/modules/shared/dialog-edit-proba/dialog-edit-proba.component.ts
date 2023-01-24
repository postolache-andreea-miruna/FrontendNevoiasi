import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProbaService } from 'src/app/services/proba.service';
import { DialogAddEditComponent } from '../dialog-add-edit/dialog-add-edit.component';

@Component({
  selector: 'app-dialog-edit-proba',
  templateUrl: './dialog-edit-proba.component.html',
  styleUrls: ['./dialog-edit-proba.component.scss']
})
export class DialogEditProbaComponent implements OnInit{
  ngOnInit() { }
  public probaForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    numeProba: new FormControl(''),
  });

  constructor(
    private probaService: ProbaService,
    private dialogRef: MatDialogRef<DialogAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    console.log(data);
    if(data){
      this.probaForm.patchValue(data);
    }
  }


  get id(): AbstractControl{
    return this.probaForm.get('id') as AbstractControl;
  }

  get numeProba(): AbstractControl{
    return this.probaForm.get('numeProba') as AbstractControl;
  }

  public save(): void{
    this.probaService.updateProba(this.probaForm.value).subscribe(
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
