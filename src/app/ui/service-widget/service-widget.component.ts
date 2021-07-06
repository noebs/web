import { Component, Input, OnInit, PACKAGE_ROOT_URL } from '@angular/core';
import { Service } from '../../../custom-typings';
@Component({
  selector: 'app-service-widget',
  templateUrl: './service-widget.component.html',
  styleUrls: ['./service-widget.component.scss']
})
export class ServiceWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() service: Service
  @Input() iconStyle: string
}
