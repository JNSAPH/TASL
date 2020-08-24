import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-urllist',
  templateUrl: './urllist.component.html',
  styleUrls: ['./urllist.component.scss']
})
export class URLListComponent implements OnInit {

  readonly ROOT_URL = "http://localhost:3000/TASL"
  response: any;

  constructor(private http: HttpClient) { }



  public ngOnInit(): void {
    this.http.get(this.ROOT_URL + '/getShortDetails')
      .subscribe((data) => {
        this.response = data
      });
  }

  update() {
    this.ngOnInit
  }

    deleteShort(short) {
    this.http.delete(this.ROOT_URL + '/deleteShort/' + short)
      .subscribe((data) => {
        this.response = data
        this.ngOnInit()
      });
  }

}
