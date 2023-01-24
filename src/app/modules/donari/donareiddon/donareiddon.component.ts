import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DonariDonatorModel } from 'src/app/models/donari-donator-model';
import { DonareService } from 'src/app/services/donare.service';

@Component({
  selector: 'app-donareiddon',
  templateUrl: './donareiddon.component.html',
  styleUrls: ['./donareiddon.component.scss']
})
export class DonareiddonComponent implements OnInit{
  public donareDon: DonariDonatorModel[] = [];
  public sub: Subscription = new Subscription;
  public id: number | undefined;

  public displayedColumns = ['numeNevoias','prenumeNevoias','dataDonatie','elementDonat','confirmarePrimire'];

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
        this.getDonariidbyDon(this.id);
      }
    });
  }

  public getDonariidbyDon(id: number):void{
    this.donareService.getDonareByIdDon(id).subscribe(
      (result) =>
      {
        this.donareDon = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
