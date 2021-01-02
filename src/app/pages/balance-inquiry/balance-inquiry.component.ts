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
import * as jspdf from "jspdf";
import html2canvas from "html2canvas";
import { stringify } from "querystring";

@Component({
  selector: "app-balance-inquiry",
  templateUrl: "./balance-inquiry.component.html",
  styleUrls: ["./balance-inquiry.component.scss"]
})
export class BalanceInquiryComponent implements OnInit {
  balanceInquiryForm: FormGroup;
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
    private noebsApiService: NoebsApiService
  ) { }

  ngOnInit() {
    let today = moment().format("YYMMDDhhmmss");

    this.balanceInquiryForm = this.formBuilder.group({
      PAN: [
        "",
        [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(19)
        ]
      ],
      expDate: ["", Validators.required],
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
      UUID: null
    });

    console.log(localStorage.getItem("pubKey"));
  }

  onSubmit() {
    if (this.balanceInquiryForm.valid) {
      this.spinner.show();

      const V4uuid = uuidv4();

      const ipinBlock = this.ipinEnc.encrypt(
        this.balanceInquiryForm.get("IPIN").value,
        localStorage.getItem("pubKey"),
        V4uuid
      );

      console.log("base64.encode " + ipinBlock);
      this.balanceInquiryForm.controls["IPIN"].setValue(ipinBlock);
      this.balanceInquiryForm.controls["UUID"].setValue(V4uuid);
      this.balanceInquiryForm.controls["expDate"].setValue(
        this.inputDate.nativeElement.value
      );

      console.log(this.balanceInquiryForm.value);
      this.noebsApiService
        .balanceInquiry(this.balanceInquiryForm.value)
        .subscribe(
          response => {
            this.spinner.hide();
            this.successResponse = response;
            this.reponsecode = 200; // why hardcoding this
            let id = Date.now();
            let jsonResponse = JSON.stringify(response.ebs_response)
            localStorage.setItem(id.toString(), jsonResponse);

            console.log("the response object when stringified is: ", response);
            this.modalRef = this.modalService.show(
              this.template,
              this.modalconfig
            );
          },
          err => {
            this.spinner.hide();
            this.reponsecode = err.status;
            console.log("the response object when stringified is: ", err);
            // save to localStorage
            let id = Date.now();
            let jsonResponse = JSON.stringify(err.error.details)
            console.log("the localStorage is: ", jsonResponse)
            localStorage.setItem(id.toString(), jsonResponse);

            console.log("the response object when stringified is: ", err.error);
            //
            if (err instanceof HttpErrorResponse) {
              this.modalRef = this.modalService.show(
                this.template,
                this.modalconfig
              );
              this.error = err;
              console.log(this.error);

              this.balanceInquiryForm.controls["IPIN"].setValue("");
            }
          }
        );
    }
  }

  // i don't like this function, it is a hack
  // but it works really *well* though
  // i will add facebook share and other stuff to make it more mobile friendly
  public captureScreen() {
    var data = document.getElementById("contentToConvert");
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 100;
      var pageHeight = 150;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL("image/png");
      let pdf = new jspdf("p", "mm", "a6"); // A4 size page of PDF
      var position = 40;
      pdf.addImage(contentDataURL, "PNG", 10, position, imgWidth, imgHeight);

      // generate the current time
      var d = new Date();

      pdf.save(
        "transaction_" + d.getDate() + d.getHours() + d.getMinutes() + ".pdf"
      ); // Generated PDF
    });
  }

}
