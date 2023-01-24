import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Route } from '@angular/router';
import { Subscription } from 'rxjs';
import { InscriereAntrenorModel } from 'src/app/models/inscriere-antrenor-model';
import { InscriereNevoiasModel } from 'src/app/models/inscriere-nevoias-model';
import { InscriereService } from 'src/app/services/inscriere.service';

@Component({
  selector: 'app-inscriereby-id-antrenor',
  templateUrl: './inscriereby-id-antrenor.component.html',
  styleUrls: ['./inscriereby-id-antrenor.component.scss']
})
export class InscrierebyIdAntrenorComponent implements OnInit{
  public inscriereAntr: InscriereAntrenorModel[]=[];
  public sub: Subscription = new Subscription;
  public id: Number | undefined;

  public displayedColumns = ['numeNevoias','prenumeNevoias','dataNastere','email','telefon','dataStart']

  constructor(
    private inscrService: InscriereService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>{
      this.id = +params['id'];
      console.log(this.id);
      if(this.id) {
        this.getInscrieriidbyAntr(this.id);
      }
    });
  }

  public getInscrieriidbyAntr(id: Number):void{
    this.inscrService.getInscriereiAntrenor(id).subscribe(
      (result) =>
      {
        this.inscriereAntr = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
