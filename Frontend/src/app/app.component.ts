import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  title = 'TASL';

  constructor(private router: Router) { }
  
  checkStatus(){
    return localStorage.getItem("loggedin")
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl("admin/login");
  }

  @HostListener("window:beforeunload",["$event"])
  clearLocalStorage(event){
      localStorage.clear();
  }

 
}
