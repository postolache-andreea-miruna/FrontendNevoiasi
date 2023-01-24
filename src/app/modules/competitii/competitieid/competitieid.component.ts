import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CompetitieService } from 'src/app/services/competitie.service';

@Component({
  selector: 'app-competitieid',
  templateUrl: './competitieid.component.html',
  styleUrls: ['./competitieid.component.scss']
})
export class CompetitieidComponent implements OnInit{
  public sub: Subscription = new Subscription;

  public id: Number | undefined;
  public competitieId={
    numeCompetitie: 'default nume',
    dataStart: new Date("2001-03-26T00:00:00"),
    dataFinal: new Date("2001-03-26T00:00:00"),
    importanta: 0,
  };

  constructor(
    private competitieServ: CompetitieService,
    private route: ActivatedRoute
  ){ }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>{
      this.id = +params['id'];
      console.log(this.id);
      if(this.id) {
        this.getCompetitieid(this.id);
      }
    });
  }

  public getCompetitieid(id: Number):void{
    this.competitieServ.getCompetitieInfo(id).subscribe(
      (result) =>
      {
        this.competitieId = result[0];
        console.log(this.competitieId);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
