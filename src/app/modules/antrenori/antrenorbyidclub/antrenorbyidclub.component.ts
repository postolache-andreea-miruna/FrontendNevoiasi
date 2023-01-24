import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetAntrenorModelByClub } from 'src/app/models/get-antrenor-model-by-club';
import { AntrenorService } from 'src/app/services/antrenor.service';

@Component({
  selector: 'app-antrenorbyidclub',
  templateUrl: './antrenorbyidclub.component.html',
  styleUrls: ['./antrenorbyidclub.component.scss']
})
export class AntrenorbyidclubComponent implements OnInit{
  public antrclub: GetAntrenorModelByClub[] = [];
  public sub: Subscription = new Subscription;
  public id: Number | undefined;

  public displayedColumns = ['id','numeAntrenor','prenumeAntrenor','aniExperienta','numeSport'];

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
        this.getAntrenoriidbyclub(this.id);
      }
    });
  }

  public getAntrenoriidbyclub(id: Number):void{
    this.antrService.getAntrenorInfoByIdClub(id).subscribe(
      (result) =>
      {
        this.antrclub = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
