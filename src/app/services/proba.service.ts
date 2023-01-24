import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProbaCreatemodel } from '../models/proba-createmodel';
import { Probemodel } from '../models/probemodel';

@Injectable({
  providedIn: 'root'
})
export class ProbaService {

  httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
  };
  public url = 'https://localhost:7177/api/Proba'

  constructor(
    public http: HttpClient,
  ) { }

  public deleteProba(id: Number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`, this.httpOptions);
  }

  public updateProba(proba: Probemodel): Observable<any>{
  return this.http.put(`${this.url}`,proba, this.httpOptions);
  }

  public createProba(probaCreateModel: ProbaCreatemodel): Observable<any>{
    return this.http.post<any>(`${this.url}`,probaCreateModel, this.httpOptions);
  }

}
