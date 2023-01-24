import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdresaService } from 'src/app/services/adresa.service';

@Component({
  selector: 'app-adresaid',
  templateUrl: './adresaid.component.html',
  styleUrls: ['./adresaid.component.scss']
})
export class AdresaidComponent implements OnInit {
  public sub: Subscription = new Subscription;

  public id: Number | undefined;
  public adresaId={
    numeStrada: 'default nume',
    numarBloc: 0,
    numarAp: 0,
    codPostal:'default cod postal',
    talentatNevoiasNume: 'default nume',
    talentatNevoiasPrenume: 'default prenume',
  };

  constructor(
    private adresaService: AdresaService,
    private route: ActivatedRoute
  ){ }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>{
      this.id = +params['id'];
      console.log(this.id);
      if(this.id) {
        this.getAdresaid(this.id);
      }
    });
  }

  public getAdresaid(id: Number):void{
    this.adresaService.getAdresaInfo(id).subscribe(
      (result) =>
      {
        this.adresaId = result[0];
        console.log(this.adresaId);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
