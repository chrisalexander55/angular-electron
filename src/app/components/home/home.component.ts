import { Component, OnInit } from '@angular/core';
import {CasinocoinAPI} from '@casinocoin/libjs';
import { GetServerInfoResponse } from '@casinocoin/libjs/common/serverinfo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onTestCSCConn() {
    // connect to casinocoind
    const api = new CasinocoinAPI({
      server: 'wss://csc-node-de-e.casinocoin.eu:4443'
    });
    api.connect()
      .then(() => {
        console.log('api instantiated and connected!');
        console.log(api);
        return api.getServerInfo();
      })
      .then((res: GetServerInfoResponse) => {
        console.log('serverInfo retrieved!');
        console.log(res);
      })
      .catch((err: any) => {
        console.log('error!');
        console.log(err);
      });
  }

}
