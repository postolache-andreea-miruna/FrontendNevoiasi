import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-afiseaza-best',
  templateUrl: './dialog-afiseaza-best.component.html',
  styleUrls: ['./dialog-afiseaza-best.component.scss']
})
export class DialogAfiseazaBestComponent implements OnInit{
  public bestForm: FormGroup = new FormGroup({
    id: new FormControl(0),
  });
  constructor(
    private dialogRef: MatDialogRef<DialogAfiseazaBestComponent>,
    private router: Router,
  ){}

  get id(): AbstractControl{
    return this.bestForm.get('id') as AbstractControl;
  }

  public changeRoute(): void{
    this.router.navigate(['ist/bestof', this.bestForm.value.id]);
    this.dialogRef.close();
  }
  ngOnInit(): void { }
}
