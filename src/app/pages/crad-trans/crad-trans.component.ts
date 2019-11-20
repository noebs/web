import { Component, OnInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';
import { BsDatepickerConfig, BsDatepickerViewMode } from 'ngx-bootstrap/datepicker';
import { NoebsApiService } from '../../services/NoebsApi.service';
import { HttpErrorResponse } from '@angular/common/http';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import * as moment from 'moment';
import { IpinEncryptService } from 'app/services/IpinEncrypt.Service';
import uuidv4 from 'uuid/v4';

@Component({
  selector: 'app-crad-trans',
  templateUrl: './crad-trans.component.html',
  styleUrls: ['./crad-trans.component.scss']
})
export class CradTransComponent implements OnInit {

  cardTranForm: FormGroup;
  error;
  reponsecode;
  successResponse;

  minMode: BsDatepickerViewMode = 'month';
  dateInputFormat: 'MM/DD/YYYY'
  bsConfig: Partial<BsDatepickerConfig>;
  @ViewChild('expDatePick', { static: true }) inputDate: ElementRef;

  @ViewChild('template', { static: true }) template: TemplateRef<any>;
  modalRef: BsModalRef;
  modalconfig: ModalOptions = {
    ignoreBackdropClick: true
  };

  constructor(private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private modalService: BsModalService,
    private ipinEnc: IpinEncryptService,
    private  noebsApiService: NoebsApiService) { }

  ngOnInit() {
    let today = moment().format('YYMMDDhhmmss');

    this.cardTranForm = this.formBuilder.group({
      toCard: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(19)]],
      PAN: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(19)]],
      expDate: ['', Validators.required],
      tranAmount: ['', [Validators.required, Validators.min(1)]],

      IPIN: ['', [Validators.required, Validators.minLength(4), , Validators.maxLength(4)]],
      applicationId: 'ACTSCon',
      tranDateTime: today,
      UUID: null
    });

    console.log(localStorage.getItem('pubKey'));
  }

  onSubmit() {

    if (this.cardTranForm.valid) {
      this.spinner.show();

      const V4uuid = uuidv4();

      const ipinBlock = this.ipinEnc.encrypt(this.cardTranForm.get('IPIN').value,
        localStorage.getItem('pubKey'), V4uuid);

      console.log('base64.encode ' + ipinBlock);
      this.cardTranForm.controls['IPIN'].setValue(ipinBlock);
      this.cardTranForm.controls['UUID'].setValue(V4uuid);
      this.cardTranForm.controls['expDate'].setValue(this.inputDate.nativeElement.value);

      console.log(this.cardTranForm.value);
      this.noebsApiService.cardTcard(this.cardTranForm.value)
        .subscribe((response) => {
          this.spinner.hide();
          this.successResponse = response;
          this.reponsecode = 200;
          console.log(response);
          this.modalRef = this.modalService.show(this.template, this.modalconfig);
        }, (err) => {
          this.spinner.hide();
          this.reponsecode = err.status;
          console.log(err);
          if (err instanceof HttpErrorResponse) {
            this.modalRef = this.modalService.show(this.template, this.modalconfig);
            this.error = err;
            console.log(this.error);


          }
        }
        );


    }


  }

}
