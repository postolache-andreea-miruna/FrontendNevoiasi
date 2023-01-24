import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdresaModel } from '../models/adresa-model';
import { Nevoiasmodel } from '../models/nevoiasmodel';

@Injectable({
  providedIn: 'root'
})
export class AdreseService {
  httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/json')
  }
  public url = 'https://localhost:7177/api/Adresa'

  constructor(
    public http: HttpClient,
  ) { }

  public getAdrese(): Observable<AdresaModel[]> {
    return this.http.get<AdresaModel[]>(`${this.url}`, this.httpOptions);
  }

}
