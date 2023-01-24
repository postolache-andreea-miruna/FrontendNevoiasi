import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AntrenorService } from 'src/app/services/antrenor.service';

@Component({
  selector: 'app-stergantrenor',
  templateUrl: './stergantrenor.component.html',
  styleUrls: ['./stergantrenor.component.scss']
})
export class StergantrenorComponent implements OnInit{
  public id: Number | undefined;
  public sub: Subscription = new Subscription;

  constructor(
    private antrService: AntrenorService,
    public route: ActivatedRoute
  ){ }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params =>{
      this.id = +params['id'];
      console.log(this.id);
      if(this.id) {
        this.deleteAntrenorId(this.id);
      }
    });
  }
  public deleteAntrenorId(id: Number):void{
    this.antrService.deleteAntrenor(id).subscribe();
  }
}
