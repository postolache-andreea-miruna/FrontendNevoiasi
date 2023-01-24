import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-afiseaza-isctoric',
  templateUrl: './dialog-afiseaza-isctoric.component.html',
  styleUrls: ['./dialog-afiseaza-isctoric.component.scss']
})
export class DialogAfiseazaIsctoricComponent implements OnInit{
  public istoricForm: FormGroup = new FormGroup({
    id: new FormControl(0),
  });
  constructor(
    private dialogRef: MatDialogRef<DialogAfiseazaIsctoricComponent>,
    private router: Router,
  ){}

  get id(): AbstractControl{
    return this.istoricForm.get('id') as AbstractControl;
  }

  public changeRoute(): void{
    this.router.navigate(['ist/istoricNevId', this.istoricForm.value.id]);
    this.dialogRef.close();
  }
  ngOnInit(): void { }
}
