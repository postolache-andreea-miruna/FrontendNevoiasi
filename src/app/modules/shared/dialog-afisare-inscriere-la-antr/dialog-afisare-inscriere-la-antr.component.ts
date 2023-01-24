import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-afisare-inscriere-la-antr',
  templateUrl: './dialog-afisare-inscriere-la-antr.component.html',
  styleUrls: ['./dialog-afisare-inscriere-la-antr.component.scss']
})
export class DialogAfisareInscriereLaAntrComponent implements OnInit{
  public inscriereAntrForm: FormGroup = new FormGroup({
    id: new FormControl(0),
  });
  constructor(
    private dialogRef: MatDialogRef<DialogAfisareInscriereLaAntrComponent>,
    private router: Router,
  ){}

  get id(): AbstractControl{
    return this.inscriereAntrForm.get('id') as AbstractControl;
  }

  public changeRoute(): void{
    this.router.navigate(['inscr/inscreireidAntr', this.inscriereAntrForm.value.id]);
    this.dialogRef.close();
  }
  ngOnInit(): void { }
}
