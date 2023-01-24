import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdresaService } from 'src/app/services/adresa.service';

@Component({
  selector: 'app-stergadresa',
  templateUrl: './stergadresa.component.html',
  styleUrls: ['./stergadresa.component.scss']
})
export class StergadresaComponent implements OnInit{
  public id: Number | undefined;
  public sub: Subscription = new Subscription;

  constructor(
    private adresaService: AdresaService,
    public route: ActivatedRoute
  ){ }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>{
      this.id = +params['id'];
      console.log(this.id);
      if(this.id) {
        this.deleteAdresaId(this.id);
      }
    });
  }
  public deleteAdresaId(id: Number):void{
    this.adresaService.deleteAdresa(id).subscribe();
  }
  
}
