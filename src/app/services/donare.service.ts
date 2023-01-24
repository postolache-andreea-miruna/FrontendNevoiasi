import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonariDataDonatie } from '../models/donari-data-donatie';
import { DonariDonatorModel } from '../models/donari-donator-model';
import { DonariNevoiasModel } from '../models/donari-nevoias-model';
import { GetAntrenorModel } from '../models/get-antrenor-model';
import { GetAntrenorModelByClub } from '../models/get-antrenor-model-by-club';
import { GetAntrenorModelBySport } from '../models/get-antrenor-model-by-sport';

@Injectable({
  providedIn: 'root'
})
export class DonareService {
  httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
  };
  public url = 'https://localhost:7177/api/Donare'

  constructor(
    public http: HttpClient,
  ) { }

  public getDonareByIdNev(id:Number): Observable<DonariNevoiasModel[]> {
    return this.http.get<DonariNevoiasModel[]>(`${this.url}/byIdNevoias/${id}`,this.httpOptions);
  }
  public getDonareByIdDon(id:Number): Observable<DonariDonatorModel[]> {
    return this.http.get<DonariDonatorModel[]>(`${this.url}/byIdDonator/${id}`,this.httpOptions);
  }
  public getDonareByData(id:Date): Observable<DonariDataDonatie[]> {
    return this.http.get<DonariDataDonatie[]>(`${this.url}/byIdDataDonatie/${id}`,this.httpOptions);
  }
}
