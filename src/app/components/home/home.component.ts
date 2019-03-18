import { Component, OnInit } from '@angular/core';
import {CasinocoinAPI} from '@casinocoin/libjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onTestCSCConn(e: Event) {
    // connect to casinocoind
    const api = new CasinocoinAPI({
      server: 'wss://moon.casinocoin.eu:6006'
    });
    api.connect().then(() => {
      console.log('api instantiated and connected!');
      console.log(api);
      // return api.connection.request({
      //   command: 'test_command',
      //   data: { openOnOtherPort: true },
      // });
    });
  }

}
