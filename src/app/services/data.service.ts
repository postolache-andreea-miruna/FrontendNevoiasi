import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {//pentru a trece numele utilizatorului in main

  private userSource = new BehaviorSubject({
    email: '',
    password:''
  });

  public currentUser = this.userSource.asObservable();
  constructor(){ }

  public changeUserData(user :User): void{
    this.userSource.next(user);
  }
}
