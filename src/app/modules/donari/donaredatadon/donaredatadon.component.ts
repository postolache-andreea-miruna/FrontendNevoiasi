import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DonariDataDonatie } from 'src/app/models/donari-data-donatie';
import { DonareService } from 'src/app/services/donare.service';

@Component({
  selector: 'app-donaredatadon',
  templateUrl: './donaredatadon.component.html',
  styleUrls: ['./donaredatadon.component.scss']
})
export class DonaredatadonComponent implements OnInit{
  public donareData: DonariDataDonatie[] = [];
  public sub: Subscription = new Subscription;
  public id: Date | undefined;

  public displayedColumns = ['numeNevoias','prenumeNevoias','pseudonim','elementDonat'];

  constructor(
    private donareService: DonareService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ){ }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>{
      this.id = params['id'];
      console.log(this.id);
      if(this.id) {
        this.getDonariidbyData(this.id);
      }
    });
  }

  public getDonariidbyData(id: Date):void{
    this.donareService.getDonareByData(id).subscribe(
      (result) =>
      {
        this.donareData = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
