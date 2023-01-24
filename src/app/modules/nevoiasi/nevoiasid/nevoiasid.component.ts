import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NevoiasService } from 'src/app/services/nevoias.service';

@Component({
  selector: 'app-nevoiasid',
  templateUrl: './nevoiasid.component.html',
  styleUrls: ['./nevoiasid.component.scss']
})
export class NevoiasidComponent implements OnInit{
  public sub: Subscription = new Subscription;

  public id: Number | undefined;
  public nevoiasId={
    //id: 0,
    gen: 'N',
    numeNevoias: 'default nume',
    prenumeNevoias: 'default prenume',
    dataNastere:new Date("2001-03-26T00:00:00"),
    sportTalent: 'default sport',
    email: 'default mail',
    telefon: 'default telefon'
  };

  constructor(
    private nevoiasulService: NevoiasService,
    private route: ActivatedRoute
  ){ }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>{
      this.id = +params['id'];
      console.log(this.id);
      if(this.id) {
        this.getTalentatNevoiasid(this.id);
      }
    });
  }

  public getTalentatNevoiasid(id: Number):void{
    this.nevoiasulService.getTalentatNevoiasInfo(id).subscribe(
      (result) =>
      {
        this.nevoiasId = result[0];
        console.log(this.nevoiasId);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
}
