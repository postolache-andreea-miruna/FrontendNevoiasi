import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AntrenorModel } from '../models/antrenor-model';

@Injectable({
  providedIn: 'root'
})
export class AntrenoriService {
  httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/json')
  }
  public url = 'https://localhost:7177/api/Antrenor'

  constructor(
    public http: HttpClient,
  ) { }

  public getAntrenori(): Observable<AntrenorModel[]> {
    return this.http.get<AntrenorModel[]>(`${this.url}`, this.httpOptions);
  }

}
