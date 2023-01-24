import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NevoiasService } from 'src/app/services/nevoias.service';

@Component({
  selector: 'app-stergnevoias',
  templateUrl: './stergnevoias.component.html',
  styleUrls: ['./stergnevoias.component.scss']
})
export class StergnevoiasComponent implements OnInit{
  public id: Number | undefined;
  public sub: Subscription = new Subscription;

  constructor(
    private nevoiasService: NevoiasService,
    public route: ActivatedRoute
  ){ }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>{
      this.id = +params['id'];
      console.log(this.id);
      if(this.id) {
        this.deleteNevoiasId(this.id);
      }
    });
  }
  public deleteNevoiasId(id: Number):void{
    this.nevoiasService.deleteNevoias(id).subscribe();
  }
  

}
