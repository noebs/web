import { Component } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { zoomIn } from 'ng-animate';

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

export class BasicservicesComponent{}
