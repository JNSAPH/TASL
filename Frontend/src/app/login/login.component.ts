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
    this.http.post(this.ROOT_URL + '/login', {}, {
      headers: new HttpHeaders({
        'username':uname,
        'password':pword
      }),
    })
    .subscribe((data: any) => {
      console.log(data)
      if (data.code == 200) {
        this.accent = "success" 
        localStorage.setItem("loggedin", "true") 
        localStorage.setItem("jwt", data.token)
        this.router.navigate(['/'])
      } else {
        this.accent = "danger" 
        localStorage.clear();
      }

      this.error = data.message;
    })
  }
}
