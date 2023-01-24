import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DonatorService } from 'src/app/services/donator.service';
@Component({
  selector: 'app-dialog-add-donator',
  templateUrl: './dialog-add-donator.component.html',
  styleUrls: ['./dialog-add-donator.component.scss']
})
export class DialogAddDonatorComponent {
  public donatorAddForm: FormGroup = new FormGroup({
    numeDonator: new FormControl(''),
    prenumeDonator: new FormControl(''),
    pseudonim: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(
    private donatorService: DonatorService,
    private dialogRef: MatDialogRef<DialogAddDonatorComponent>
  ){}

  get numeDonator(): AbstractControl{
    return this.donatorAddForm.get('numeDonator') as AbstractControl;
  }

  get prenumeDonator(): AbstractControl{
    return this.donatorAddForm.get('prenumeDonator') as AbstractControl;
  }

  get pseudonim(): AbstractControl{
    return this.donatorAddForm.get('pseudonim') as AbstractControl;
  }

  get email(): AbstractControl{
    return this.donatorAddForm.get('email') as AbstractControl;
  }

  public saveAdd(): void{
    console.log(this.donatorAddForm.value);
    this.donatorService.createDonator(this.donatorAddForm.value).subscribe(
      (result) =>{
        this.dialogRef.close(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
