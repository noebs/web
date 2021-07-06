import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { zoomIn } from 'ng-animate';
import { Service } from 'custom-typings';


@Component({
  moduleId: module.id,
  selector: 'govtele-cmp',
  templateUrl: 'govtele.component.html',
  styleUrls: ['govtele.component.css'],
  animations: [
    trigger('zoomIn', [transition('* => *', useAnimation(zoomIn, {
      params: { timing: 2, delay: 0 }
    }))])
  ]
})

export class GovteleComponent implements OnInit {
  ngOnInit() {

  }

  // telecom services
  billInquiry: Service = {
    title: 'Bill Inquiry',
    description: 'check your bill',
    url: '/bill-inq',
    iconStyle: 'nc-icon nc-money-coins'
  }

  billPay: Service = {
    title: 'Bill Payment',
    description: 'pay your bill',
    url: '/bill-pay',
    iconStyle: 'nc-icon nc-paper text-warning'
  }

  topUp: Service = {
    title: 'Top Up',
    description: 'charge your phone',
    url: '/topUp',
    iconStyle: 'nc-icon nc-share-66'
  }

  telecomServices: Service[] = [
    this.billInquiry,
    this.billPay,
    this.topUp,
  ]

  // education services

  arabEdu: Service = {
    title: 'Arab High Education',
    description: 'pay your Educational fee',
    url: 'mohe-arab',
    iconStyle: 'nc-icon nc-hat-3'
  }

  sudaneseEdu: Service = {
    title: 'Sudanese High Educatoin',
    description: 'pay your Educational fee',
    url: 'mohe',
    iconStyle: 'nc-icon nc-hat-3 text-success'
  }

  eduServices: Service[] = [
    this.sudaneseEdu,
    this.arabEdu
  ]

  // gov services

  eFivteen: Service = {
    title: 'E-15',
    description: 'inquery , payment',
    url: '/e15',
    iconStyle: 'nc-icon nc-single-copy-04 text-warning'
  }

  previousTrans: Service = {
    title: "Previous Transactions",
    description: "View your previous transactions",
    url: "/history",
    iconStyle: "nc-icon nc-paper text-success"
  }

  customs: Service = {
    title: 'Customs',
    description: 'inquery , payment',
    url: '/customs',
    iconStyle: 'nc-icon nc-delivery-fast'
  }


  govServices: Service[] = [
    this.eFivteen,
    this.previousTrans,
    this.customs
  ]

}
