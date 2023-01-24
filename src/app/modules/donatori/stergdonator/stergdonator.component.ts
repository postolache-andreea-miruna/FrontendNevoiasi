import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DonatorService } from 'src/app/services/donator.service';

@Component({
  selector: 'app-stergdonator',
  templateUrl: './stergdonator.component.html',
  styleUrls: ['./stergdonator.component.scss']
})
export class StergdonatorComponent implements OnInit{
  public id: Number | undefined;
  public sub: Subscription = new Subscription;

  constructor(
    private donatorService: DonatorService,
    public route: ActivatedRoute
  ){ }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>{
      this.id = +params['id'];
      console.log(this.id);
      if(this.id) {
        this.deleteDonatorId(this.id);
      }
    });
  }
  public deleteDonatorId(id: Number):void{
    this.donatorService.deleteDonator(id).subscribe();
  }
  
}
