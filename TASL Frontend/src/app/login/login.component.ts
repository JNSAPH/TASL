import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  readonly ROOT_URL = "http://localhost:3000/TASL"
  response: any;
  accent: any;
  error: any;

  constructor(private http: HttpClient, private router: Router,) { }

  login(uname, pword){
    localStorage.setItem('loggedin', 'true');
  }
}
