import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BsDatepickerConfig, BsDatepickerViewMode } from 'ngx-bootstrap/datepicker';
import { BalanceinquiryService } from '../../services/balanceinquiry.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import * as moment from 'moment';
import * as uuid from 'uuid';


@Component({
  selector: 'app-balance-inquiry',
  templateUrl: './balance-inquiry.component.html',
  styleUrls: ['./balance-inquiry.component.scss']
})
export class BalanceInquiryComponent implements OnInit {

 
  get f() { return this.balanceInquiryForm.controls; }

  balanceInquiryForm: FormGroup;
  submitted = false;
  error ;
  reponsecode;

  minMode: BsDatepickerViewMode = 'month';
  dateInputFormat: 'MM/DD/YYYY'
  bsConfig: Partial<BsDatepickerConfig>;

  @ViewChild('template' , { static: true }) template: TemplateRef<any>;
  modalRef: BsModalRef;
  modalconfig:ModalOptions = {
    
    ignoreBackdropClick: true
  };

  constructor(private formBuilder: FormBuilder, private spinner: NgxSpinnerService,
    private modalService: BsModalService ,
     private balanceInqSerivce: BalanceinquiryService) { }

  ngOnInit() {
   let today = moment().format('YYMMDDhhmmss');
   const myId = uuid.v4();
    console.log(myId);
    console.log(today);
    this.balanceInquiryForm = this.formBuilder.group({

      PAN: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(19)]],
      expDate: ['', Validators.required],
      IPIN: ['', [Validators.required, Validators.minLength(4), , Validators.maxLength(4)]],
      applicationId: 'ActsQA' ,
      tranDateTime: today ,
      UUID: myId
    });
  }

  onSubmit() {
    if (this.balanceInquiryForm.valid) {
      this.spinner.show();
      this.balanceInqSerivce.balanceInquiry(this.balanceInquiryForm.value)
        .subscribe((response) => {
          this.spinner.hide();
          this.modalRef = this.modalService.show(this.template , this.modalconfig);

        }, (err) => {
            this.spinner.hide();
            this.reponsecode = err.status;
            console.log( err );
            if (err instanceof HttpErrorResponse) {
              this.modalRef = this.modalService.show(this.template, this.modalconfig);
              this.error = err;
                  console.log( this.error);

            }
          }
        );


    }


  }
}
