import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Probemodel } from '../models/probemodel';

@Injectable({
  providedIn: 'root'
})
export class ProbeService {
  httpOptions = {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/json')
  }
  public url = 'https://localhost:7177/api/Proba'

  constructor(
    public http: HttpClient,
  ) { }

  public getProbe(): Observable<Probemodel[]> {
    return this.http.get<Probemodel[]>(`${this.url}`, this.httpOptions);
  }

}
