import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CompetitieService } from 'src/app/services/competitie.service';

@Component({
  selector: 'app-dialog-edit-competitie',
  templateUrl: './dialog-edit-competitie.component.html',
  styleUrls: ['./dialog-edit-competitie.component.scss']
})
export class DialogEditCompetitieComponent implements OnInit {
  ngOnInit() { }
  public competitieForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    dataStart: new FormControl('YYYY-MM-DDT00:00:00'),
    dataFinal: new FormControl('YYYY-MM-DDT00:00:00'),
  });

  constructor(
    private compService: CompetitieService,
    private dialogRef: MatDialogRef<DialogEditCompetitieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    console.log(data);
    if(data){
      this.competitieForm.patchValue(data);
    }
  }


  get id(): AbstractControl{
    return this.competitieForm.get('id') as AbstractControl;
  }

  get dataStart(): AbstractControl{
    return this.competitieForm.get('dataStart') as AbstractControl;
  }

  get dataFinal(): AbstractControl{
    return this.competitieForm.get('dataFinal') as AbstractControl;
  }

  public save(): void{
    this.compService.updateCompetitie(this.competitieForm.value).subscribe(
      (result) =>{
        console.log(result);
        this.dialogRef.close();
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
