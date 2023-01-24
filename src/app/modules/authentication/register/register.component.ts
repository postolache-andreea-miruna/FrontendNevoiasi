import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Register } from 'src/app/models/register';
import { AuthentifService } from 'src/app/services/authentif.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  public registrationForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    roleId: new FormControl(''),
  });

  constructor(private authentifService : AuthentifService) { }
  
  ngOnInit(): void {

  }

  onRegister(){//cand se apasa butonul de register
    localStorage.setItem('RoleId', this.registrationForm.value.roleId);
    var newUser = new Register(this.registrationForm.value);
    this.authentifService.register(newUser).subscribe();
  }
  

}
