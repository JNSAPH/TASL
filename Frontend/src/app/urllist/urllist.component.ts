import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-urllist',
  templateUrl: './urllist.component.html',
  styleUrls: ['./urllist.component.scss']
})
export class URLListComponent implements OnInit {

  @Output() removedEntry = new EventEmitter();

  readonly ROOT_URL = "http://localhost:3000/TASL"
  //readonly ROOT_URL = document.location.origin + "/TASL"
  response: any;
  website_url: string = document.location.origin;

  constructor(private http: HttpClient) { }

  public ngOnInit(): void {
    this.http.post(this.ROOT_URL + '/getShortDetails', {}, {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('jwt')
      }),
    })
      .subscribe((data) => {
        this.response = data
      });
  }

  // Currently a POST request
  deleteShort(short) {
    this.http.post(this.ROOT_URL + '/deleteShort', short, {
      headers: new HttpHeaders({
        'authorization':localStorage.getItem('jwt'),
        'short': short
      })
    })
    .subscribe((data: any) => {
      this.ngOnInit();
      this.removedEntry.emit();
    })
  } 
}
