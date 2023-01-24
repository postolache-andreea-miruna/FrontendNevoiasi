import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProbaService } from 'src/app/services/proba.service';

@Component({
  selector: 'app-dialog-add-proba',
  templateUrl: './dialog-add-proba.component.html',
  styleUrls: ['./dialog-add-proba.component.scss']
})
export class DialogAddProbaComponent implements OnInit {
  public probaAddForm: FormGroup = new FormGroup({
    numeProba: new FormControl(''),
  });

  constructor(
    private probaService: ProbaService,
    private dialogRef: MatDialogRef<DialogAddProbaComponent>
  ){}

  get numeProba(): AbstractControl{
    return this.probaAddForm.get('numeProba') as AbstractControl;
  }

  ngOnInit(): void {
    
  }
  public saveAdd(): void{
    console.log(this.probaAddForm.value);
    this.probaService.createProba(this.probaAddForm.value).subscribe(
      (result) =>{
        this.dialogRef.close(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
