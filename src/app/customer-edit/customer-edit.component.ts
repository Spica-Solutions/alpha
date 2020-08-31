import { Component, OnInit } from '@angular/core';
import { AppUIService } from '../_services/app-ui.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  editGenInfoForm: FormGroup;
  rtype: string = "";
  subscription: Subscription;
  ui: AppUIService;

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
        console.log(`setting rtype=${this.rtype}`);
        this.rtype = d;
      }
    });
    console.log(`edit rtype: ${this.rtype}`);
    this.initFormGroups();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  initFormGroups(): void {
    // Form Builder
    // this.genInfoForm = this.fb.group({
    //   status: ['', Validators.required],
    //   iscompany: [true, Validators.required],
    //   name: ['', Validators.required],
    //   email: '',
    //   phone: '',
    //   altphone: ''
    // })
    // this.genInfoForm.valueChanges.subscribe(console.log);

    // this.addressForm = this.fb.group({
    //   country: '',
    //   addr1: '',
    //   addr2: '',
    //   city: '',
    //   state: '',
    //   zip: ''
    // })
    // this.addressForm.valueChanges.subscribe(console.log);

    this.editGenInfoForm = this.fb.group({
      status: ['', Validators.required],
      iscompany: [true, Validators.required],
      name: ['', Validators.required],
      email: '',
      phone: '',
      altphone: ''
    })
    this.editGenInfoForm.valueChanges.subscribe(console.log);

  }

  submitRec() {
    console.log(this.editGenInfoForm.value);
  }

}
