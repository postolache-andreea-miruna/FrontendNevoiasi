import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nevoiasmodel } from '../models/nevoiasmodel';

@Injectable({
  providedIn: 'root'
})
export class NevoiasiService {
  httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/json')
  }
  public url = 'https://localhost:7177/api/TalentatNevoias'

  constructor(
    public http: HttpClient,
  ) { }

  public getTalentatNevoiasi(): Observable<Nevoiasmodel[]> {
    return this.http.get<Nevoiasmodel[]>(`${this.url}`, this.httpOptions);
  }


}
