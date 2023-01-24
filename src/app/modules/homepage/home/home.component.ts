import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { AuthentifService } from 'src/app/services/authentif.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy{
  
  public subscription : Subscription = new Subscription;
  public loggedUser: User = {
    email: '',
    password: ''
  };

  constructor(private authentifService : AuthentifService, private dataService : DataService) { }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.dataService.currentUser.subscribe(user => this.loggedUser = user);
  }
  
  
  onLogout() {
    this.authentifService.logout();
  }

}
