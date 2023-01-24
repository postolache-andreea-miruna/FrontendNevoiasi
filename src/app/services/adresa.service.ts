import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdresaCreateModel } from '../models/adresa-create-model';
import { AdresaUpdateModel } from '../models/adresa-update-model';
import { GetIdAdresaModel } from '../models/get-id-adresa-model';

@Injectable({
  providedIn: 'root'
})
export class AdresaService {

  httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
  };
  public url = 'https://localhost:7177/api/Adresa'

  constructor(
    public http: HttpClient,
  ) { }

  public getAdresaInfo(id:Number): Observable<GetIdAdresaModel[]> {
    return this.http.get<GetIdAdresaModel[]>(`${this.url}/byId/${id}`,this.httpOptions);
  }

  public deleteAdresa(id: Number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`, this.httpOptions);
  }

  public updateAdresa(adresaUpdateModel: AdresaUpdateModel ): Observable<any>{
  return this.http.put(`${this.url}`,adresaUpdateModel, this.httpOptions);
  }

  public createAdresa(adresaCreateModel: AdresaCreateModel ): Observable<any>{
    return this.http.post<any>(`${this.url}`,adresaCreateModel, this.httpOptions);
  }
}
