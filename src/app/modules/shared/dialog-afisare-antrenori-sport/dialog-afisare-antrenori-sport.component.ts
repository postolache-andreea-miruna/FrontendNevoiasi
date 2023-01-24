import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-afisare-antrenori-sport',
  templateUrl: './dialog-afisare-antrenori-sport.component.html',
  styleUrls: ['./dialog-afisare-antrenori-sport.component.scss']
})
export class DialogAfisareAntrenoriSportComponent implements OnInit{
  public afisareAntrForm: FormGroup = new FormGroup({
    id: new FormControl(0),
  });
  constructor(
    private dialogRef: MatDialogRef<DialogAfisareAntrenoriSportComponent>,
    private router: Router,
  ){}

  get id(): AbstractControl{
    return this.afisareAntrForm.get('id') as AbstractControl;
  }

  public changeRoute(): void{
    this.router.navigate(['antr/antrenoridsport', this.afisareAntrForm.value.id]);
    this.dialogRef.close();
  }
  ngOnInit(): void { }

}
