import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DonatorService } from 'src/app/services/donator.service';

@Component({
  selector: 'app-donatorid',
  templateUrl: './donatorid.component.html',
  styleUrls: ['./donatorid.component.scss']
})
export class DonatoridComponent implements OnInit {
  public sub: Subscription = new Subscription;

  public id: Number | undefined;
  public donatorId={
    numeDonator: 'default nume',
    prenumeDonator: 'default prenume',
    pseudonim:'default pseudonim',
    email: 'default mail',
  };

  constructor(
    private donatorService: DonatorService,
    private route: ActivatedRoute
  ){ }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>{
      this.id = +params['id'];
      console.log(this.id);
      if(this.id) {
        this.getTalentatDonatorid(this.id);
      }
    });
  }

  public getTalentatDonatorid(id: Number):void{
    this.donatorService.getDonatorInfo(id).subscribe(
      (result) =>
      {
        this.donatorId = result[0];
        console.log(this.donatorId);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
}
