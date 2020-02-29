import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  ElementRef
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {
  BsDatepickerConfig,
  BsDatepickerViewMode
} from "ngx-bootstrap/datepicker";
import { NoebsApiService } from "../../services/NoebsApi.service";
import { HttpErrorResponse } from "@angular/common/http";
import { BsModalService, BsModalRef, ModalOptions } from "ngx-bootstrap/modal";
import { NgxSpinnerService } from "ngx-spinner";
import * as moment from "moment";
import { IpinEncryptService } from "app/services/IpinEncrypt.Service";
import uuidv4 from "uuid/v4";

@Component({
  selector: "app-electricity",
  templateUrl: "./electricity.component.html",
  styleUrls: ["./electricity.component.scss"]
})
export class ElectricityComponent implements OnInit {
  electriForm: FormGroup;
  error;
  reponsecode;
  successResponse;

  minMode: BsDatepickerViewMode = "month";
  dateInputFormat: "MM/DD/YYYY";
  bsConfig: Partial<BsDatepickerConfig>;
  @ViewChild("expDatePick", { static: true }) inputDate: ElementRef;

  @ViewChild("template", { static: true }) template: TemplateRef<any>;
  modalRef: BsModalRef;
  modalconfig: ModalOptions = {
    ignoreBackdropClick: true
  };

  constructor(
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private modalService: BsModalService,
    private ipinEnc: IpinEncryptService,
    private noebsApiSerivce: NoebsApiService
  ) {}

  ngOnInit() {
    let today = moment().format("YYMMDDhhmmss");

    this.electriForm = this.formBuilder.group({
      PAN: [
        "",
        [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(19)
        ]
      ],
      expDate: ["", Validators.required],
      tranAmount: ["", [Validators.required, Validators.min(0.01)]],
      paymentInfo: ["", Validators.required],
      IPIN: [
        "",
        [
          Validators.required,
          Validators.minLength(4),
          ,
          Validators.maxLength(4)
        ]
      ],
      applicationId: "ACTSCon",
      tranDateTime: today,
      payeeId: "0010020001",
      UUID: null
    });

    console.log(localStorage.getItem("pubKey"));
  }

  onSubmit() {
    if (this.electriForm.valid) {
      this.spinner.show();

      const V4uuid = uuidv4();

      const ipinBlock = this.ipinEnc.encrypt(
        this.electriForm.get("IPIN").value,
        localStorage.getItem("pubKey"),
        V4uuid
      );

      let amount = parseFloat(this.electriForm.controls["tranAmount"].value);
      this.electriForm.controls["tranAmount"].setValue(amount);

      this.electriForm.controls["IPIN"].setValue(ipinBlock);
      this.electriForm.controls["UUID"].setValue(V4uuid);
      this.electriForm.controls["expDate"].setValue(
        this.inputDate.nativeElement.value
      );
      const meter = this.electriForm.controls["paymentInfo"].value;
      this.electriForm.controls["paymentInfo"].setValue("METER=" + meter);

      console.log(this.electriForm.value);
      this.noebsApiSerivce.billPaymentService(this.electriForm.value).subscribe(
        response => {
          this.spinner.hide();
          this.successResponse = response;
          let id = Date.now();
          let jsonResponse = JSON.stringify(response.ebs_response);
          localStorage.setItem(id.toString(), jsonResponse);

          this.reponsecode = 200;
          console.log(response);
          this.modalRef = this.modalService.show(
            this.template,
            this.modalconfig
          );
        },
        err => {
          this.spinner.hide();
          let id = Date.now();
          let jsonResponse = JSON.stringify(err.error.details);
          console.log("the localStorage is: ", jsonResponse);
          localStorage.setItem(id.toString(), jsonResponse);

          this.reponsecode = err.status;
          console.log(err);
          if (err instanceof HttpErrorResponse) {
            this.modalRef = this.modalService.show(
              this.template,
              this.modalconfig
            );
            this.error = err;
            console.log(this.error);
          }
        }
      );

      this.electriForm.controls["paymentInfo"].setValue(meter);
      this.electriForm.controls["IPIN"].setValue("");
    }
  }
}
