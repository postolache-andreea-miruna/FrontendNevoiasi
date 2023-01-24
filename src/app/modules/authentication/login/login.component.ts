import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Login } from 'src/app/models/login';
import { AuthentifService } from 'src/app/services/authentif.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authentifService : AuthentifService, private dataService : DataService) { }

  ngOnInit(): void {
  }

  onLogin(){
    var newUser = new Login(this.loginForm.value);
    this.authentifService.login(newUser).subscribe((result) => {
      this.authentifService.roles(newUser).subscribe((res) => {
        // console.log(result); //rolul cu care s-a logat
      });
    });

   this.dataService.changeUserData(this.loginForm.value);

  }
  

}
