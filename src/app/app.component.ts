import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';
import { TestHeaderService } from './login/sign-in/test-header.service';
import { NetworkService } from './services/network.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  status: OnlineStatusType | undefined;
  onlineStatusCheck: any = OnlineStatusType;

  constructor(
    private onlineStatusService: OnlineStatusService,
    private networkState: NetworkService,

    private testHeaderService: TestHeaderService
  ) {
    this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      // Retrieve Online status Type
      this.status = status;
      console.log(this.status);
      this.networkState.updateNetworkState(this.status);
    });
  }
  ngOnInit() {
    this.testHeaderService.testHeader().subscribe(resp=>{});
  }
}
