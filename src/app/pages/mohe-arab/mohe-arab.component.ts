import { Component, OnInit } from '@angular/core';
import { TransactionsLogger } from 'app/services/transactions-logger.service';

@Component({
  selector: 'app-mohe-arab',
  templateUrl: './mohe-arab.component.html',
  styleUrls: ['./mohe-arab.component.scss']
})
export class MoheArabComponent implements OnInit {

  constructor(
    private transLogger: TransactionsLogger
  ) { }

  ngOnInit() {
  }

}
