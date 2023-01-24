import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-afiseaza-donari-data',
  templateUrl: './dialog-afiseaza-donari-data.component.html',
  styleUrls: ['./dialog-afiseaza-donari-data.component.scss']
})
export class DialogAfiseazaDonariDataComponent implements OnInit{
  public donaridataForm: FormGroup = new FormGroup({
    id: new FormControl('YYYY-MM-DDT00:00:00'),
  });
  constructor(
    private dialogRef: MatDialogRef<DialogAfiseazaDonariDataComponent>,
    private router: Router,
  ){}

  get id(): AbstractControl{
    return this.donaridataForm.get('id') as AbstractControl;
  }

  public changeRoute(): void{
    this.router.navigate(['don/donaredatadonatie', this.donaridataForm.value.id]);
    this.dialogRef.close();
  }
  ngOnInit(): void { }
}
