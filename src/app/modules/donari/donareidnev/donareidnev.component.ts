import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DonariNevoiasModel } from 'src/app/models/donari-nevoias-model';
import { DonareService } from 'src/app/services/donare.service';

@Component({
  selector: 'app-donareidnev',
  templateUrl: './donareidnev.component.html',
  styleUrls: ['./donareidnev.component.scss']
})
export class DonareidnevComponent implements OnInit{
  public donareNev: DonariNevoiasModel[] = [];
  public sub: Subscription = new Subscription;
  public id: number | undefined;

  public displayedColumns = ['pseudonim','dataDonatie','elementDonat','confirmarePrimire'];

  constructor(
    private donareService: DonareService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ){ }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>{
      this.id = +params['id'];
      console.log(this.id);
      if(this.id) {
        this.getDonariidbyNev(this.id);
      }
    });
  }

  public getDonariidbyNev(id: number):void{
    this.donareService.getDonareByIdNev(id).subscribe(
      (result) =>
      {
        this.donareNev = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
