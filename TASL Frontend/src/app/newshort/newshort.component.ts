import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-newshort',
  templateUrl: './newshort.component.html',
  styleUrls: ['./newshort.component.scss']
})


export class NewshortComponent {

  @Output() newAdded = new EventEmitter();

  readonly ROOT_URL = "http://localhost:3000/TASL"
  response: any;

  constructor(private http: HttpClient) {}


  
  makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }


  newShort(long, short) {
    const head = {
      long: long,
      short: short
    }

    this.http.post(this.ROOT_URL + '/createShort', head, {
      headers: new HttpHeaders({
        'long':long,
        'short':!short ? this.makeid(5) : short
      })
    })
    .subscribe((data) => {
      this.newAdded.emit();
    })


  }

}
// Event name: newAdded
