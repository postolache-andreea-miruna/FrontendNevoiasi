import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetBestOfModel } from 'src/app/models/get-best-of-model';
import { IstoricService } from 'src/app/services/istoric.service';

@Component({
  selector: 'app-bestof',
  templateUrl: './bestof.component.html',
  styleUrls: ['./bestof.component.scss']
})
export class BestofComponent implements OnInit{
  public best: GetBestOfModel[] = [];
  public sub: Subscription = new Subscription;
  public id: Number | undefined;

  public displayedColumns = ['numeProba','timpObtinut'];

  constructor(
    private istoricService: IstoricService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ){ }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>{
      this.id = +params['id'];
      console.log(this.id);
      if(this.id) {
        this.getBestOfNevoiasId(this.id);
      }
    });
  }

  public getBestOfNevoiasId(id: Number):void{
    this.istoricService.getBestOf(id).subscribe(
      (result) =>
      {
        this.best = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
