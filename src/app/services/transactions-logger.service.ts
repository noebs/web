import { Injectable } from '@angular/core';
import { TransactionType } from 'custom-typings';

@Injectable({
  providedIn: 'root'
})
export class TransactionsLogger {

  private previousTransactions: any[] = []

  constructor() {
    this.previousTransactions = JSON.parse(localStorage.getItem('previousTransactions')) || []

  }

  private generateId() {
    return Date.now()
  }

  add(transactionType: TransactionType, transctionRecord: any) {
    console.log("transactionLogger: ", "start: ", transactionType);

    const record = { id: this.generateId(), transactionType, ...transctionRecord }
    this.previousTransactions.push(record)
    localStorage.setItem('previousTransactions', JSON.stringify(this.previousTransactions))
    console.log("transactionLogger: ", "record added: ", record);

  }

  all() {
    return this.previousTransactions
  }
}
