import { Component, OnInit, Type } from "@angular/core";
import { TypeScriptEmitter } from "@angular/compiler";

import * as fileSaver from "file-saver";
import { TransactionsLogger } from 'app/services/transactions-logger.service';

@Component({
  selector: "local-transactions",
  templateUrl: "./local-transactions.component.html",
  styleUrls: ["./local-transactions.component.scss"]
})
export class LocalTransactions implements OnInit {
  previousTransactions = []
  constructor(private transactionLogger: TransactionsLogger) {
    this.previousTransactions = this.transactionLogger.all()
  }

  // how to pass data from angular ts file to its view
  ngOnInit() { }

  public downloadCSV() {
    let data = this.previousTransactions;

    const replacer = (key, value) => (value === null ? "" : value); // specify how you want to handle null values here
    const header = Object.keys(data[0]);
    let csv = data.map(row =>
      header
        .map(fieldName => JSON.stringify(row[fieldName], replacer))
        .join(",")
    );
    csv.unshift(header.join(","));
    let csvArray = csv.join("\n");

    var blob = new Blob([csvArray], { type: "text/csv" });
    fileSaver.saveAs(blob, "myFile.csv");
  }
}
