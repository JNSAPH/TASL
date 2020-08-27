import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-newshort',
  templateUrl: './newshort.component.html',
  styleUrls: ['./newshort.component.scss']
})


export class NewshortComponent {

  @Output() newAdded = new EventEmitter();

  readonly ROOT_URL = "http://localhost:3000/TASL"
  //readonly ROOT_URL = document.location.origin + "/TASL"
  response: any;

  constructor(private http: HttpClient, private toastrService: NbToastrService) {}

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
    this.http.post(this.ROOT_URL + '/createShort', long, {
      headers: new HttpHeaders({
        'Authorization':localStorage.getItem('jwt'),
        'long':long,
        'short':!short ? this.makeid(5) : short
      })
    })
    .subscribe((data: any) => {
      this.newAdded.emit();

      if (data.code == 400) {
        this.showToast('top-right', 'danger', 'Error!', 'Please supply a URL before clicking on Shorten');
      } else {
        this.showToast('top-right', 'success', "Success!", 'New Short-URL Generated');
      }

    })
  }
  
  showToast(position, status, head, description) {
    this.toastrService.show(
      description,
      head,
      { position, status });
  }

}
// Event name: newAdded