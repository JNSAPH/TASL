import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
 
@Component({
  selector: 'app-urllist',
  templateUrl: './urllist.component.html',
  styleUrls: ['./urllist.component.scss']
})
export class URLListComponent implements OnInit {

  readonly ROOT_URL = "https://jsonplaceholder.typicode.com"
  response: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.ROOT_URL + '/posts')
    .subscribe((data) => {
        this.response = data
    });
  }

}
