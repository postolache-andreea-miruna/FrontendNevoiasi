import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-afisare-inscriere-nev',
  templateUrl: './dialog-afisare-inscriere-nev.component.html',
  styleUrls: ['./dialog-afisare-inscriere-nev.component.scss']
})
export class DialogAfisareInscriereNevComponent implements OnInit{
  public inscriereNevForm: FormGroup = new FormGroup({
    id: new FormControl(0),
  });
  constructor(
    private dialogRef: MatDialogRef<DialogAfisareInscriereNevComponent>,
    private router: Router,
  ){}

  get id(): AbstractControl{
    return this.inscriereNevForm.get('id') as AbstractControl;
  }

  public changeRoute(): void{
    this.router.navigate(['inscr/inscriereidNev', this.inscriereNevForm.value.id]);
    this.dialogRef.close();
  }
  ngOnInit(): void { }

}
