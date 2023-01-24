import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CompetitieService } from 'src/app/services/competitie.service';

@Component({
  selector: 'app-stergcompetitie',
  templateUrl: './stergcompetitie.component.html',
  styleUrls: ['./stergcompetitie.component.scss']
})
export class StergcompetitieComponent implements OnInit{
  public id: Number | undefined;
  public sub: Subscription = new Subscription;

  constructor(
    private compServ: CompetitieService,
    public route: ActivatedRoute
  ){ }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>{
      this.id = +params['id'];
      console.log(this.id);
      if(this.id) {
        this.deleteCompId(this.id);
      }
    });
  }
  public deleteCompId(id: Number):void{
    this.compServ.deleteCompetitie(id).subscribe();
  }
}
