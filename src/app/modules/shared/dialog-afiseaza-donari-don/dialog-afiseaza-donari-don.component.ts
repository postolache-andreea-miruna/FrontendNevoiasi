import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-afiseaza-donari-don',
  templateUrl: './dialog-afiseaza-donari-don.component.html',
  styleUrls: ['./dialog-afiseaza-donari-don.component.scss']
})
export class DialogAfiseazaDonariDonComponent implements OnInit{
  public donaridonForm: FormGroup = new FormGroup({
    id: new FormControl(0),
  });
  constructor(
    private dialogRef: MatDialogRef<DialogAfiseazaDonariDonComponent>,
    private router: Router,
  ){}

  get id(): AbstractControl{
    return this.donaridonForm.get('id') as AbstractControl;
  }

  public changeRoute(): void{
    this.router.navigate(['don/doanreiddon', this.donaridonForm.value.id]);
    this.dialogRef.close();
  }
  ngOnInit(): void { }
}
