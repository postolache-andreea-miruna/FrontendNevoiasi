import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-afiseaza-donari-nev',
  templateUrl: './dialog-afiseaza-donari-nev.component.html',
  styleUrls: ['./dialog-afiseaza-donari-nev.component.scss']
})
export class DialogAfiseazaDonariNevComponent implements OnInit{
  public donarinevForm: FormGroup = new FormGroup({
    id: new FormControl(0),
  });
  constructor(
    private dialogRef: MatDialogRef<DialogAfiseazaDonariNevComponent>,
    private router: Router,
  ){}

  get id(): AbstractControl{
    return this.donarinevForm.get('id') as AbstractControl;
  }

  public changeRoute(): void{
    this.router.navigate(['don/donareidnev', this.donarinevForm.value.id]);
    this.dialogRef.close();
  }
  ngOnInit(): void { }
}
