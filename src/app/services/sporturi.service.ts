import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SportModel } from '../models/sport-model';

@Injectable({
  providedIn: 'root'
})
export class SporturiService {
  httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/json')
  }
  public url = 'https://localhost:7177/api/Sport'

  constructor(
    public http: HttpClient,
  ) { }

  public getSporturi(): Observable<SportModel[]> {
    return this.http.get<SportModel[]>(`${this.url}`, this.httpOptions);
  }
}
