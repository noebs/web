import { Component } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { zoomIn } from 'ng-animate';
import { Service } from '../../../custom-typings';

@Component({
  selector: 'basicservices-cmp',
  moduleId: module.id,
  templateUrl: 'basicservices.component.html',
  animations: [
    trigger('zoomIn', [transition('* => *', useAnimation(zoomIn, {
      params: { timing: 2, delay: 0 }
    }))])
  ]
})

export class BasicservicesComponent {

  // services
  previousTrans: Service = { title: "Previous Transactions", description: "View your previous transactions", url: "/history", iconStyle: "nc-icon nc-paper text-success" }
  transfer: Service = { title: "Transfer", description: "card to card, card to account", url: "/card-tran", iconStyle: "nc-icon nc-credit-card text-primary" }
  ipinGen: Service = { title: "IPIN", description: "Generate iPIN, or change an existing one", url: "/ipin", iconStyle: "nc-icon nc-lock-circle-open text-danger" }
  elecPay: Service = { title: "Electricity Purchase", description: "Electricity Service", url: "/electricity", iconStyle: "nc-icon nc-bulb-63 text-warning" }
  balanceInquiry: Service = { title: "Balance Inquiry", description: "check card balance", url: "/balance-inquiry", iconStyle: "nc-icon nc-money-coins" }

  services: Service[] = [
    this.balanceInquiry,
    this.elecPay,
    this.ipinGen,
    this.transfer,
    this.previousTrans,
  ]
}
