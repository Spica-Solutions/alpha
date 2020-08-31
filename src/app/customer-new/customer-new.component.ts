import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppUIService } from '../_services/app-ui.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent implements OnInit {

  ui: AppUIService;
  addressForm: FormGroup;
  genInfoForm: FormGroup;
  rtype: string = "";
  subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private uiSvc: AppUIService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.ui = uiSvc;
  }

  ngOnInit(): void {
    this.subscription = this.ui.onRecordTypeChange().subscribe(d => {
      if (d) {
        this.rtype = d;
      }
    });
    this.initFormGroups();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  clear() {
    this.genInfoForm.reset();
    this.addressForm.reset();
  }

  initFormGroups(): void {
    // Form Builder
    this.genInfoForm = this.fb.group({
      status: ['', Validators.required],
      iscompany: [true, Validators.required],
      name: ['', Validators.required],
      email: '',
      phone: '',
      altphone: ''
    })
    this.genInfoForm.valueChanges.subscribe(console.log);

    this.addressForm = this.fb.group({
      country: '',
      addr1: '',
      addr2: '',
      city: '',
      state: '',
      zip: ''
    })
    this.addressForm.valueChanges.subscribe(console.log);

    // this.editGenInfoForm = this.fb.group({
    //   status: ['', Validators.required],
    //   iscompany: [true, Validators.required],
    //   name: ['', Validators.required],
    //   email: '',
    //   phone: '',
    //   altphone: ''
    // })
    // this.editGenInfoForm.valueChanges.subscribe(console.log);

  }

  submitRec() {
    console.log(this.genInfoForm.value);
  }
}
