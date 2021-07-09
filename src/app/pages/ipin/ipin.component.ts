import { Component, OnInit } from '@angular/core';
import { TransactionsLogger } from 'app/services/transactions-logger.service';

@Component({
  selector: 'app-ipin',
  templateUrl: './ipin.component.html',
  styleUrls: ['./ipin.component.scss']
})
export class IpinComponent implements OnInit {

  constructor(
    private transLogger: TransactionsLogger
  ) { }

  ngOnInit() {
  }

}
