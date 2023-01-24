import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { IstoricModel } from 'src/app/models/istoric-model';
import { IstoriceService } from 'src/app/services/istorice.service';

@Component({
  selector: 'app-istoric',
  templateUrl: './istoric.component.html',
  styleUrls: ['./istoric.component.scss']
})
export class IstoricComponent implements OnInit{
  public istorice: IstoricModel[] = [];
  public displayedColumns = ['talentatNevoiasId', 'talentatNevoiasName', 'talentatNevoiasPrenume', 'numeCompetitie', 'numeProba', 'locClasament']
  constructor(
    private istService: IstoriceService,
    private router: Router,
    private dialog: MatDialog,
    public authGuard: AuthGuard
  ) { }

  ngOnInit() {
    this.istService.getIstorice().subscribe(
      (result: IstoricModel[]) => {
        console.log(result);
        this.istorice = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
