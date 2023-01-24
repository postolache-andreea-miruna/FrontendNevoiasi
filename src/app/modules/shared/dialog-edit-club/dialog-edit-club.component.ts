import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-dialog-edit-club',
  templateUrl: './dialog-edit-club.component.html',
  styleUrls: ['./dialog-edit-club.component.scss']
})
export class DialogEditClubComponent implements OnInit{
  ngOnInit() { }
  public clubForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    email: new FormControl('')
  });

  constructor(
    private clubService: ClubService,
    private dialogRef: MatDialogRef<DialogEditClubComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    console.log(data);
    if(data){
      this.clubForm.patchValue(data);
    }
  }

  get id(): AbstractControl{
    return this.clubForm.get('id') as AbstractControl;
  }

  get email(): AbstractControl{
    return this.clubForm.get('email') as AbstractControl;
  }

  public save(): void{
    this.clubService.updateClub(this.clubForm.value).subscribe(
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
