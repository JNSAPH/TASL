import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  readonly ROOT_URL = "http://localhost:3000/TASL"
  //readonly ROOT_URL = document.location.origin + "/TASL"
  response: any;
  accent: any;
  error: any;

  constructor(private http: HttpClient, private router: Router,) { }

  register(uname, pword, master) {
    localStorage.setItem('loggedin', 'true');
    this.http.post(this.ROOT_URL + '/register', {}, {
      headers: new HttpHeaders({
        'username': uname,
        'password': pword,
        'Authorization': localStorage.getItem('jwt'),
        'master': master
      }),
    })
      .subscribe((data: any) => {
        if(data.code == 201) {
          this.accent = "success";
        } else {
          this.accent = "danger";
        }
        console.log(data)
        this.error = data.message;
      })
  }
}
