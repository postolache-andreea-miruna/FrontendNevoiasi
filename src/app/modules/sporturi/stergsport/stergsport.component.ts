import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SportService } from 'src/app/services/sport.service';

@Component({
  selector: 'app-stergsport',
  templateUrl: './stergsport.component.html',
  styleUrls: ['./stergsport.component.scss']
})
export class StergsportComponent implements OnInit{
  public id: Number | undefined;
  public sub: Subscription = new Subscription;

  constructor(
    private sportService: SportService,
    public route: ActivatedRoute
  ){ }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>{
      this.id = +params['id'];
      console.log(this.id);
      if(this.id) {
        this.deletSportId(this.id);
      }
    });
  }
  public deletSportId(id: Number):void{
    this.sportService.deleteSport(id).subscribe();
  }
}
