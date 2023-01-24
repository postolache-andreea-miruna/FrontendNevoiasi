import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CluburiModel } from '../models/cluburi-model';

@Injectable({
  providedIn: 'root'
})
export class CluburiService {
  httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/json')
  }
  public url = 'https://localhost:7177/api/Club'

  constructor(
    public http: HttpClient,
  ) { }

  public getCluburi(): Observable<CluburiModel[]> {
    return this.http.get<CluburiModel[]>(`${this.url}`, this.httpOptions);
  }
}
