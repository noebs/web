import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-balance-inquiry',
  templateUrl: './balance-inquiry.component.html',
  styleUrls: ['./balance-inquiry.component.scss']
})
export class BalanceInquiryComponent implements OnInit {

  balanceInquiryForm:FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
  this.balanceInquiryForm = this.formBuilder.group({
    
   cardNumber: ['', Validators.required],
   expDate: ['', Validators.required],
   IPIN: ['', [Validators.required, Validators.minLength(4)]],
           
  });
  }


  get f() { return this.balanceInquiryForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.balanceInquiryForm.valid) {
     console.log(this.balanceInquiryForm);
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.balanceInquiryForm.value, null, 4));

    }

  
    // display form values on success
   
}
}
