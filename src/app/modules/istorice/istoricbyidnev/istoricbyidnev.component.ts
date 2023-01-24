import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthGuard } from 'src/app/auth.guard';
import { GetIstoricModelByIdNev } from 'src/app/models/get-istoric-model-by-id-nev';
import { IstoricModel } from 'src/app/models/istoric-model';
import { IstoricService } from 'src/app/services/istoric.service';
import { IstoriceService } from 'src/app/services/istorice.service';

@Component({
  selector: 'app-istoricbyidnev',
  templateUrl: './istoricbyidnev.component.html',
  styleUrls: ['./istoricbyidnev.component.scss']
})
export class IstoricbyidnevComponent implements OnInit{
  public istoric: GetIstoricModelByIdNev[] = [];
  public sub: Subscription = new Subscription;
  public id: Number | undefined;

  public displayedColumns = ['numeProba', 'numeCompetitie', 'locClasament', 'timpObtinut', 'medaliat', 'dataStart','dataFinal']

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
        this.getIstoricNevoiasId(this.id);
      }
    });
  }

  public getIstoricNevoiasId(id: Number):void{
    this.istoricService.getIstoric(id).subscribe(
      (result) =>
      {
        this.istoric = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
