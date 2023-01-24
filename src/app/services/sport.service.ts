import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SportCreateModel } from '../models/sport-create-model';
import { SportModel } from '../models/sport-model';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
  };
  public url = 'https://localhost:7177/api/Sport'

  constructor(
    public http: HttpClient,
  ) { }

  public deleteSport(id: Number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`, this.httpOptions);
  }

  public updateSport(model: SportModel): Observable<any>{
  return this.http.put(`${this.url}`,model, this.httpOptions);
  }

  public createSport(model: SportCreateModel): Observable<any>{
    return this.http.post<any>(`${this.url}`,model, this.httpOptions);
  }
}
