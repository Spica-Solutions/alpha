import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Custom Services
import { AppUIService } from 'src/app/_services/app-ui.service';

// Custom Modules

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  rtype: string = "";
  rid: string = "";
  paramsSub: any;
  urlSub: any;

  // Services
  ui: AppUIService;

  listStatus: [];

  // genInfoForm: FormGroup;
  // addressForm: FormGroup;
  // editGenInfoForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private uiSvc: AppUIService
  ) {
    this.ui = uiSvc;
  }

  // Event Triggers - START
/*   clear() {
    this.genInfoForm.reset();
    this.addressForm.reset();
  } */

  ngOnInit(): void {
    this.parseRouteData();
    // this.initFormGroups();
  }

  ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
    this.urlSub.unsubscribe();
  }

  submitRec(): void {
    this.ui.navTo(this.rtype, { id: '8834848484'});
  }
  // Event Triggers - END

  // Custom Functions - START
  gotoRecord(): void {
    console.log(`gotoRecord(rid: ${this.rid}`);
  }

  initFormGroups(): void {
    // Form Builder
    /* this.genInfoForm = this.fb.group({
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
    this.addressForm.valueChanges.subscribe(console.log); */

    /* this.editGenInfoForm = this.fb.group({
      status: ['', Validators.required],
      iscompany: [true, Validators.required],
      name: ['', Validators.required],
      email: '',
      phone: '',
      altphone: ''
    })
    this.editGenInfoForm.valueChanges.subscribe(console.log); */

  }

/*   logRecord() {
    console.log(this.genInfoForm.value);
  } */

  parseRouteData(): void {
    this.paramsSub = this.route
      .queryParams
      .subscribe(p => {
        this.rid = p['id'] || '';
        if (this.rid) {
          this.rid = this.rid.trim();
        }
        console.log(`rid: '${this.rid}'`);
      });
    this.urlSub = this.route
      .parent.url.subscribe(u => {
        this.rtype = u[0].path;
        console.log(`rtype: ${this.rtype}`);
      });
    console.log({ rid: this.rid, rtype: this.rtype });

    console.log('Setting title...');
    if (this.rid) {
      this.ui.setPageTitle(`${this.rtype} ${this.rid}`);
    }
    else {
      this.ui.setPageTitle(`new ${this.rtype}`);
    }
  }
  // Custom Functions - END

}
