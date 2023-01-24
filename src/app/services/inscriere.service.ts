import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InscriereAntrenorModel } from '../models/inscriere-antrenor-model';
import { InscriereNevoiasModel } from '../models/inscriere-nevoias-model';

@Injectable({
  providedIn: 'root'
})
export class InscriereService {
  httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
  };
  public url = 'https://localhost:7177/api/Inscriere'

  constructor(
    public http: HttpClient,
  ) { }

  public getInscriereidNevoias(id:Number): Observable<InscriereNevoiasModel[]> {
    return this.http.get<InscriereNevoiasModel[]>(`${this.url}/byIdNevoias/${id}`,this.httpOptions);
  }

  public getInscriereiAntrenor(id:Number): Observable<InscriereAntrenorModel[]> {
    return this.http.get<InscriereAntrenorModel[]>(`${this.url}/byIdAntrenor/${id}`,this.httpOptions);
  }
}
