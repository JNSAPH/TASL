import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  readonly ROOT_URL = "http://localhost:3000/TASL"
  //readonly ROOT_URL = document.location.origin + "/TASL"
  response: any;
  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get(this.ROOT_URL + '/getStats')
    .subscribe((data) => {
      this.response = data
      console.log(data)
    });
  }

}
