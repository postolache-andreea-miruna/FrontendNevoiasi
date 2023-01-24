import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompetitieModel } from '../models/competitie-model';

@Injectable({
  providedIn: 'root'
})
export class CompetitiiService {

  httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/json')
  }
  public url = 'https://localhost:7177/api/Competitie'

  constructor(
    public http: HttpClient,
  ) { }

  public getCompetitii(): Observable<CompetitieModel[]> {
    return this.http.get<CompetitieModel[]>(`${this.url}`, this.httpOptions);
  }

}
