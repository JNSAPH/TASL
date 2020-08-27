import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private toastrService: NbToastrService) { }

  ngOnInit(): void {
     {
       if (!localStorage.getItem('loggedin')) this.router.navigateByUrl("admin/login");
       this.showToast("top-right", "info", "Login", "Successfully logged in!")
    }
  }



  showToast(position, status, head, description) {
    this.toastrService.show(
      description,
      head,
      { position, status });
  }

}
