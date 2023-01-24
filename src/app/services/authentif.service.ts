import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentifService {

  private authUrl = 'https://localhost:7177/api/Authentication';
  httpOtions = {
    headers : new HttpHeaders(
      {
         'Content-Type' : 'application/json'
      }
    )
  };

  constructor(private http: HttpClient, private router: Router, private jwtService : JwtHelperService) {  }

  register(userData : any) : Observable<any> {
    return this.http.post<any>(`${this.authUrl}/sign-up`, userData)
    .pipe(map(() => {
      this.router.navigate(['/auth/login']);
    }));
  }

//login ret un token -> deci daca am primit un token => succes
  login(userData : any) : Observable<any> {
    return this.http.post<any>(`${this.authUrl}/login`, userData)
    .pipe(map((respone : any) => {
      if(respone?.token){ //daca a mers bine logarea
        localStorage.setItem('token', respone.token); //token primit de la back
        this.router.navigate(['/home']);
      }

    }));
  }

  roles(userData:any):Observable<any>{
    return this.http.post<any>(`${this.authUrl}/role`, userData)
    .pipe(map((response : any) =>
    {
      localStorage.setItem('RoleId',response);
    }));
  }

  //se verifica daca tokenul este expirat sau nu
  isLoggedIn(){
    const token = localStorage.getItem('token') || ""; //daca e null pun string gol
    //folosim pachetul npm install @auth0/angular-jwt  --lucreaza cu tokenuri jwt
    return !this.jwtService.isTokenExpired(token); //userul este logat cand tokenul nu e expirat
  }

  logout() {
    
    localStorage.removeItem('token'); //am sters token deci nu mai sunt logat
    localStorage.removeItem('RoleId');
    this.router.navigate(['/auth/login'])
  }

}
