import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SportService } from 'src/app/services/sport.service';

@Component({
  selector: 'app-dialog-add-sport',
  templateUrl: './dialog-add-sport.component.html',
  styleUrls: ['./dialog-add-sport.component.scss']
})
export class DialogAddSportComponent implements OnInit{
  public sportAddForm: FormGroup = new FormGroup({
    numeSport: new FormControl('')
  });

  constructor(
    private sportService: SportService,
    private dialogRef: MatDialogRef<DialogAddSportComponent>
  ){}

  get numeSport(): AbstractControl{
    return this.sportAddForm.get('numeSport') as AbstractControl;
  }

  ngOnInit(): void {
  }

  public saveAdd(): void{
    console.log(this.sportAddForm.value);
    this.sportService.createSport(this.sportAddForm.value).subscribe(
      (result) =>{
        this.dialogRef.close(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
