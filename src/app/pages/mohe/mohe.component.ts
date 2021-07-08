import { Component, OnInit } from '@angular/core';
import { TransactionsLogger } from 'app/services/transactions-logger.service';

@Component({
  selector: 'app-mohe',
  templateUrl: './mohe.component.html',
  styleUrls: ['./mohe.component.scss']
})
export class MoheComponent implements OnInit {

  constructor(private transLogger: TransactionsLogger) { }

  ngOnInit() {
  }

}
