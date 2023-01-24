import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CompetitieService } from 'src/app/services/competitie.service';

@Component({
  selector: 'app-dialog-add-competitie',
  templateUrl: './dialog-add-competitie.component.html',
  styleUrls: ['./dialog-add-competitie.component.scss']
})
export class DialogAddCompetitieComponent implements OnInit{
  public competitieAddForm: FormGroup = new FormGroup({
    numeCompetitie: new FormControl(''),
    dataStart: new FormControl('YYYY-MM-DDT00:00:00'),
    dataFinal: new FormControl('YYYY-MM-DDT00:00:00'),
    importanta: new FormControl(0),
  });

  constructor(
    private compService: CompetitieService,
    private dialogRef: MatDialogRef<DialogAddCompetitieComponent>
  ){}

  get numeCompetitie(): AbstractControl{
    return this.competitieAddForm.get('numeCompetitie') as AbstractControl;
  }

  get dataStart(): AbstractControl{
    return this.competitieAddForm.get('dataStart') as AbstractControl;
  }

  get dataFinal(): AbstractControl{
    return this.competitieAddForm.get('dataFinal') as AbstractControl;
  }

  get importanta(): AbstractControl{
    return this.competitieAddForm.get('importanta') as AbstractControl;
  }

  ngOnInit(): void {
    
  }
  public saveAdd(): void{
    console.log(this.competitieAddForm.value);
    this.compService.createCompetitie(this.competitieAddForm.value).subscribe(
      (result) =>{
        this.dialogRef.close(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
