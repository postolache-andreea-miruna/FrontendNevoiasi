import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonatorCreateModel } from '../models/donator-create-model';
import { DonatorUpdateModel } from '../models/donator-update-model';
import { GetIdDonatorModel } from '../models/get-id-donator-model';

@Injectable({
  providedIn: 'root'
})
export class DonatorService {

  httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
  };
  public url = 'https://localhost:7177/api/Donator'

  constructor(
    public http: HttpClient,
  ) { }

  public getDonatorInfo(id:Number): Observable<GetIdDonatorModel[]> {
    return this.http.get<GetIdDonatorModel[]>(`${this.url}/byId/${id}`,this.httpOptions);
  }

  public deleteDonator(id: Number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`, this.httpOptions);
  }

  public updateDonator(donatorUpdateModel: DonatorUpdateModel ): Observable<any>{
  return this.http.put(`${this.url}`,donatorUpdateModel, this.httpOptions);
  }

  public createDonator(donatorCreateModel: DonatorCreateModel ): Observable<any>{
    return this.http.post<any>(`${this.url}`,donatorCreateModel, this.httpOptions);
  }

}
