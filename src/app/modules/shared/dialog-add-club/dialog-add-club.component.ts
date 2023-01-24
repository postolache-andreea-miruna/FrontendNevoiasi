import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-dialog-add-club',
  templateUrl: './dialog-add-club.component.html',
  styleUrls: ['./dialog-add-club.component.scss']
})
export class DialogAddClubComponent implements OnInit{

  public clubAddForm: FormGroup = new FormGroup({
    numeClub: new FormControl(''),
    email: new FormControl('')
  });

  constructor(
    private clubService: ClubService,
    private dialogRef: MatDialogRef<DialogAddClubComponent>
  ){ }

  get numeClub():AbstractControl{
    return this.clubAddForm.get('numeClub') as AbstractControl;
  }

  get email():AbstractControl{
    return this.clubAddForm.get('email') as AbstractControl;
  }

  ngOnInit(): void {
  }
  
  public saveAdd(): void{
    this.clubService.createClub(this.clubAddForm.value).subscribe(
      (result) =>{
        this.dialogRef.close(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
