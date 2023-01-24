import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { InscriereNevoiasModel } from 'src/app/models/inscriere-nevoias-model';
import { InscriereService } from 'src/app/services/inscriere.service';

@Component({
  selector: 'app-inscriereby-id-nevoias',
  templateUrl: './inscriereby-id-nevoias.component.html',
  styleUrls: ['./inscriereby-id-nevoias.component.scss']
})
export class InscrierebyIdNevoiasComponent implements OnInit{
  public inscriereNev: InscriereNevoiasModel[]=[];
  public sub: Subscription = new Subscription;
  public id: Number | undefined;

  public displayedColumns = ['numeAntrenor','prenumeAntrenor','numeClub','dataStart']

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
        this.getInscrieriidbyNev(this.id);
      }
    });
  }

  public getInscrieriidbyNev(id: Number):void{
    this.inscrService.getInscriereidNevoias(id).subscribe(
      (result) =>
      {
        this.inscriereNev = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
