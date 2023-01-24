import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AntrenorService } from 'src/app/services/antrenor.service';

@Component({
  selector: 'app-antrenorbyid',
  templateUrl: './antrenorbyid.component.html',
  styleUrls: ['./antrenorbyid.component.scss']
})
export class AntrenorbyidComponent implements OnInit{
  public sub: Subscription = new Subscription;
  public id: Number | undefined;
  public antrenorId={
    numeAntrenor: 'default nume',
    prenumeAntrenor: 'default prenume',
    gen: 'N',
    aniExperienta: 0,
    numeSport: 'default sport',
    numeClub: 'default club',
  };

  constructor(
    private antrService: AntrenorService,
    private route: ActivatedRoute
  ){ }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>{
      this.id = +params['id'];
      console.log(this.id);
      if(this.id) {
        this.getAntrenorid(this.id);
      }
    });
  }

  public getAntrenorid(id: Number):void{
    this.antrService.getAntrenorInfoById(id).subscribe(
      (result) =>
      {
        this.antrenorId = result[0];
        console.log(this.antrenorId);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
