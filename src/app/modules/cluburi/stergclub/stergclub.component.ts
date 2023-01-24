import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-stergclub',
  templateUrl: './stergclub.component.html',
  styleUrls: ['./stergclub.component.scss']
})
export class StergclubComponent implements OnInit{
  public id: Number | undefined;
  public sub: Subscription = new Subscription;

  constructor(
    private clubService: ClubService,
    public route: ActivatedRoute
  ){ }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>{
      this.id = +params['id'];
      console.log(this.id);
      if(this.id) {
        this.deleteClubId(this.id);
      }
    });
  }
  public deleteClubId(id: Number):void{
    this.clubService.deleteClub(id).subscribe();
  }
  
}
