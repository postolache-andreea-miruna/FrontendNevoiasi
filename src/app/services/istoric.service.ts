import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetBestOfModel } from '../models/get-best-of-model';
import { GetIstoricModelByIdNev } from '../models/get-istoric-model-by-id-nev';
import { IstoricModel } from '../models/istoric-model';

@Injectable({
  providedIn: 'root'
})
export class IstoricService {
  httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
  };
  public url = 'https://localhost:7177/api/IstoricParticipare'

  constructor(
    public http: HttpClient,
  ) { }

  public getIstoric(id:Number): Observable<GetIstoricModelByIdNev[]> {
    return this.http.get<GetIstoricModelByIdNev[]>(`${this.url}/istoric/${id}`,this.httpOptions);
  }

  public getBestOf(id:Number): Observable<GetBestOfModel[]> {
    return this.http.get<GetBestOfModel[]>(`${this.url}/bestOf/${id}`,this.httpOptions);
  }
}
