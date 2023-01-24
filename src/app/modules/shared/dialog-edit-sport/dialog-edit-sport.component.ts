import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SportService } from 'src/app/services/sport.service';

@Component({
  selector: 'app-dialog-edit-sport',
  templateUrl: './dialog-edit-sport.component.html',
  styleUrls: ['./dialog-edit-sport.component.scss']
})
export class DialogEditSportComponent implements OnInit{
  ngOnInit() {
  }

  public sportForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    numeSport: new FormControl(''),
  });
  
  constructor(
    private sportService: SportService,
    private dialogRef: MatDialogRef<DialogEditSportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    console.log(data);
    if(data){
      this.sportForm.patchValue(data);
    }
  }

  get id(): AbstractControl{
    return this.sportForm.get('id') as AbstractControl;
  }

  get numeSport(): AbstractControl{
    return this.sportForm.get('numeSport') as AbstractControl;
  }

  public save(): void{
    this.sportService.updateSport(this.sportForm.value).subscribe(
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
