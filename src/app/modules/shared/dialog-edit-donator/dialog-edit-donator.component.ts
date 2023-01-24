import { Component, Inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DonatorService } from 'src/app/services/donator.service';
import { DialogAddEditComponent } from '../dialog-add-edit/dialog-add-edit.component';

@Component({
  selector: 'app-dialog-edit-donator',
  templateUrl: './dialog-edit-donator.component.html',
  styleUrls: ['./dialog-edit-donator.component.scss']
})
export class DialogEditDonatorComponent {
  ngOnInit() { }
  public donatorForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    numeDonator: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(
    private donatorService: DonatorService,
    private dialogRef: MatDialogRef<DialogAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    console.log(data);
    if(data){
      this.donatorForm.patchValue(data);
    }
  }


  get id(): AbstractControl{
    return this.donatorForm.get('id') as AbstractControl;
  }

  get numeDonator(): AbstractControl{
    return this.donatorForm.get('numeDonator') as AbstractControl;
  }

  get email(): AbstractControl{
    return this.donatorForm.get('email') as AbstractControl;
  }

  
  public save(): void{
    this.donatorService.updateDonator(this.donatorForm.value).subscribe(
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
