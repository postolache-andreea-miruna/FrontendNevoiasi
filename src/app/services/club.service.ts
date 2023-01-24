import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClubCreateModel } from '../models/club-create-model';
import { ClubUpdateModel } from '../models/club-update-model';
import { GetIdClubModel } from '../models/get-id-club-model';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
  };
  public url = 'https://localhost:7177/api/Club'

  constructor(
    public http: HttpClient,
  ) { }

  public getTClubInfo(id:Number): Observable<GetIdClubModel[]> {
    return this.http.get<GetIdClubModel[]>(`${this.url}/byId/${id}`,this.httpOptions);
  }

  public deleteClub(id: Number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`, this.httpOptions);
  }

  public updateClub(model: ClubUpdateModel ): Observable<any>{
  return this.http.put(`${this.url}`,model, this.httpOptions);
  }

  public createClub(model: ClubCreateModel ): Observable<any>{
    return this.http.post<any>(`${this.url}`,model, this.httpOptions);
  }
}
