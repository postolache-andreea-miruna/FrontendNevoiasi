import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetIdNevoiasModel } from '../models/get-id-nevoias-model';
import { NevoiasCreateModel } from '../models/nevoias-create-model';
import { NevoiasUpdateModel } from '../models/nevoias-update-model';

@Injectable({
  providedIn: 'root'
})
export class NevoiasService {

  httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
  };
  public url = 'https://localhost:7177/api/TalentatNevoias'

  constructor(
    public http: HttpClient,
  ) { }

  public getTalentatNevoiasInfo(id:Number): Observable<GetIdNevoiasModel[]> {
    return this.http.get<GetIdNevoiasModel[]>(`${this.url}/byId/${id}`,this.httpOptions);
  }

  public deleteNevoias(id: Number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`, this.httpOptions);
  }

  public updateNevoias(nevoiasUpdateModel: NevoiasUpdateModel ): Observable<any>{
  return this.http.put(`${this.url}`,nevoiasUpdateModel, this.httpOptions);
  }

  public createNevoias(nevoiasCreateModel: NevoiasCreateModel ): Observable<any>{
    return this.http.post<any>(`${this.url}`,nevoiasCreateModel, this.httpOptions);
  }

}
