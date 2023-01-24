import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAntrenorCreateModel } from '../models/get-antrenor-create-model';
import { GetAntrenorModel } from '../models/get-antrenor-model';
import { GetAntrenorModelByClub } from '../models/get-antrenor-model-by-club';
import { GetAntrenorModelBySport } from '../models/get-antrenor-model-by-sport';
import { GetAntrenorUpdateModel } from '../models/get-antrenor-update-model';

@Injectable({
  providedIn: 'root'
})
export class AntrenorService {
  httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
  };
  public url = 'https://localhost:7177/api/Antrenor'

  constructor(
    public http: HttpClient,
  ) { }

  public getAntrenorInfoById(id:Number): Observable<GetAntrenorModel[]> {
    return this.http.get<GetAntrenorModel[]>(`${this.url}/byId/${id}`,this.httpOptions);
  }
  public getAntrenorInfoByIdClub(id:Number): Observable<GetAntrenorModelByClub[]> {
    return this.http.get<GetAntrenorModelByClub[]>(`${this.url}/IdClub/${id}`,this.httpOptions);
  }
  public getAntrenorInfoByIdSport(id:Number): Observable<GetAntrenorModelBySport[]> {
    return this.http.get<GetAntrenorModelBySport[]>(`${this.url}/IdSport/${id}`,this.httpOptions);
  }
  public deleteAntrenor(id: Number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`, this.httpOptions);
  }

  public updateAntrenor(model: GetAntrenorUpdateModel ): Observable<any>{
  return this.http.put(`${this.url}`,model, this.httpOptions);
  }

  public createAntrenor(model: GetAntrenorCreateModel ): Observable<any>{
    return this.http.post<any>(`${this.url}`,model, this.httpOptions);
  }
}
