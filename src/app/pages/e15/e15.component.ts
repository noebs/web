import { Component, OnInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsDatepickerConfig, BsDatepickerViewMode } from 'ngx-bootstrap/datepicker';
import { NoebsApiService } from '../../services/NoebsApi.service';
import { HttpErrorResponse } from '@angular/common/http';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import * as moment from 'moment';
import { IpinEncryptService } from 'app/services/IpinEncrypt.Service';
import uuidv4 from 'uuid/v4';

@Component({
  selector: 'app-e15',
  templateUrl: './e15.component.html',
  styleUrls: ['./e15.component.scss']
})
export class E15Component implements OnInit {


  e15Form: FormGroup;
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
    private noebsApiSerivce: NoebsApiService) { }

  ngOnInit() {
    let today = moment().format('YYMMDDhhmmss');

    this.e15Form = this.formBuilder.group({
      PAN: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(19)]],
      expDate: ['', Validators.required],
      tranAmount: ['', [Validators.required, Validators.min(1)]],
      paymentInfo: ['', Validators.required],
      declarantCode: ['', Validators.required],
      IPIN: ['', [Validators.required, Validators.minLength(4), , Validators.maxLength(4)]],
      payeeId: ['0010050001'],
      applicationId: 'ACTSCon',
      tranDateTime: today,
      UUID: null
    });

    console.log(localStorage.getItem('pubKey'));
  }

  onSubmit() {

    if (this.e15Form.valid) {
      this.spinner.show();

      const V4uuid = uuidv4();

      const ipinBlock = this.ipinEnc.encrypt(this.e15Form.get('IPIN').value,
        localStorage.getItem('pubKey'), V4uuid);

      this.e15Form.controls['IPIN'].setValue(ipinBlock);
      this.e15Form.controls['UUID'].setValue(V4uuid);
      this.e15Form.controls['expDate'].setValue(this.inputDate.nativeElement.value);
      this.e15Form.controls['paymentInfo'].setValue('MPHONE=' + this.e15Form.controls['paymentInfo'].value);


      console.log(this.e15Form.value);
      this.noebsApiSerivce.billPaymentService(this.e15Form.value)
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

        this.e15Form.controls['IPIN'].setValue('');


      }


  }

}
