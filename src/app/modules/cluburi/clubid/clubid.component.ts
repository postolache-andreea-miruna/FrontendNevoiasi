import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-clubid',
  templateUrl: './clubid.component.html',
  styleUrls: ['./clubid.component.scss']
})
export class ClubidComponent implements OnInit{
  public sub: Subscription = new Subscription;

  public id: Number | undefined;
  public clubId={
    numeClub: 'default nume',
    email: 'default mail',
  };

  constructor(
    private clubService: ClubService,
    private route: ActivatedRoute
  ){ }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>{
      this.id = +params['id'];
      console.log(this.id);
      if(this.id) {
        this.getClubid(this.id);
      }
    });
  }

  public getClubid(id: Number):void{
    this.clubService.getTClubInfo(id).subscribe(
      (result) =>
      {
        this.clubId = result[0];
        console.log(this.clubId);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
