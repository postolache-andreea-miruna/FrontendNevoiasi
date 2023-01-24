import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonatorModel } from '../models/donator-model';

@Injectable({
  providedIn: 'root'
})
export class DonatoriService {

  httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/json')
  }
  public url = 'https://localhost:7177/api/Donator'
  constructor(
    public http: HttpClient,
  ) { }

  public getDonatori(): Observable<DonatorModel[]> {
    return this.http.get<DonatorModel[]>(`${this.url}`, this.httpOptions);
  }
}
