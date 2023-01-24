import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IstoricModel } from '../models/istoric-model';

@Injectable({
  providedIn: 'root'
})
export class IstoriceService {
  httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/json')
  }
  public url = 'https://localhost:7177/api/IstoricParticipare'

  constructor(
    public http: HttpClient,
  ) { }

  public getIstorice(): Observable<IstoricModel[]> {
    return this.http.get<IstoricModel[]>(`${this.url}`, this.httpOptions);
  }

}
