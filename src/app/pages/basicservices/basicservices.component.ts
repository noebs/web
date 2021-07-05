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
  PREVIOUS_TRANS: Service = { title: "Previous Transactions", desciption: "View your previous transactions", url: "/history" }
  TRANSFER: Service = { title: "Transfer", desciption: "card to card, card to account", url: "/card-tran" }
  IPIN_GEN: Service = { title: "IPIN", desciption: "Generate iPIN, or change an existing one", url: "/ipin" }
  ELEC_PAY: Service = { title: "Electricity Purchase", desciption: "Electricity Service", url: "/electricity" }
  BALANCE_INQ: Service = { title: "Balance Inquiry", desciption: "check card balance", url: "/balance-inquiry" }


  services = [
    this.BALANCE_INQ,
    this.ELEC_PAY,
    this.IPIN_GEN,
    this.TRANSFER,
    this.PREVIOUS_TRANS
  ]
}
