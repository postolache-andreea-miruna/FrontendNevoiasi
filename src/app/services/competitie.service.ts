import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompetitieCreateModel } from '../models/competitie-create-model';
import { CompetitieUpdateModel } from '../models/competitie-update-model';
import { GetIdCompetitieModel } from '../models/get-id-competitie-model';

@Injectable({
  providedIn: 'root'
})
export class CompetitieService {

  httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
  };
  public url = 'https://localhost:7177/api/Competitie'

  constructor(
    public http: HttpClient,
  ) { }

  public getCompetitieInfo(id:Number): Observable<GetIdCompetitieModel[]> {
    return this.http.get<GetIdCompetitieModel[]>(`${this.url}/byId/${id}`,this.httpOptions);
  }

  public deleteCompetitie(id: Number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`, this.httpOptions);
  }

  public updateCompetitie(model: CompetitieUpdateModel ): Observable<any>{
  return this.http.put(`${this.url}`,model, this.httpOptions);
  }

  public createCompetitie(model: CompetitieCreateModel ): Observable<any>{
    return this.http.post<any>(`${this.url}`,model, this.httpOptions);
  }
}
