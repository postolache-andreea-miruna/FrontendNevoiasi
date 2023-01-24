import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProbaService } from 'src/app/services/proba.service';

@Component({
  selector: 'app-stergproba',
  templateUrl: './stergproba.component.html',
  styleUrls: ['./stergproba.component.scss']
})
export class StergprobaComponent {
  public id: Number | undefined;
  public sub: Subscription = new Subscription;

  constructor(
    private probaService: ProbaService,
    public route: ActivatedRoute
  ){ }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>{
      this.id = +params['id'];
      console.log(this.id);
      if(this.id) {
        this.deleteProbaId(this.id);
      }
    });
  }
  public deleteProbaId(id: Number):void{
    this.probaService.deleteProba(id).subscribe();
  }
}
