import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-newshort',
  templateUrl: './newshort.component.html',
  styleUrls: ['./newshort.component.scss']
})
export class NewshortComponent {

  constructor(private http: HttpClient) { }

}
