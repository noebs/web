import { Component,OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { zoomIn } from 'ng-animate';


@Component({
    moduleId: module.id,
    selector: 'govtele-cmp',
    templateUrl: 'govtele.component.html',
    styleUrls: ['govtele.component.css'] ,
    animations: [
        trigger('zoomIn', [transition('* => *', useAnimation(zoomIn, {
          params: { timing: 2, delay: 0 }
        }))])
      ]
})

export class GovteleComponent implements OnInit {
    ngOnInit() {
    
    }
       
}
