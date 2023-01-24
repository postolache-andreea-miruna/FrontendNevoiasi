import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetAntrenorModelBySport } from 'src/app/models/get-antrenor-model-by-sport';
import { AntrenorService } from 'src/app/services/antrenor.service';

@Component({
  selector: 'app-antrenorbyidsport',
  templateUrl: './antrenorbyidsport.component.html',
  styleUrls: ['./antrenorbyidsport.component.scss']
})
export class AntrenorbyidsportComponent implements OnInit{
  public antrSport: GetAntrenorModelBySport[]=[];
  public sub: Subscription = new Subscription;
  public id: Number | undefined;

  public displayedColumns = ['id','numeAntrenor','prenumeAntrenor','aniExperienta','numeClub'];

  constructor(
    private antrService: AntrenorService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ){ }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>{
      this.id = +params['id'];
      console.log(this.id);
      if(this.id) {
        this.getAntrenoriidbysport(this.id);
      }
    });
  }

  public getAntrenoriidbysport(id: Number):void{
    this.antrService.getAntrenorInfoByIdSport(id).subscribe(
      (result) =>
      {
        this.antrSport = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
