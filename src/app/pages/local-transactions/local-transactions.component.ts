import { Component, OnInit, Type } from "@angular/core";
import { TypeScriptEmitter } from "@angular/compiler";

import * as fileSaver from "file-saver";

@Component({
  selector: "local-transactions",
  templateUrl: "./local-transactions.component.html",
  styleUrls: ["./local-transactions.component.scss"]
})
export class LocalTransactions implements OnInit {
  constructor() {}

  // how to pass data from angular ts file to its view
  ngOnInit() {}

  get getStorage(): Array<JSON> {
    let keys = Object.keys(localStorage);
    let v = [];
    keys.forEach(key => {
      if (!key.startsWith("pub")) {
        try {
          var res = JSON.parse(localStorage.getItem(key));
          v.push(res);
        } catch (e) {
          console.log("there's an error in json", e);
        }
      }
    });
    return v;
  }

  public downloadCSV() {
    let data = this.getStorage;

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
