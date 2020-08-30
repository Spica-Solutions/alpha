import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUtilService } from 'src/app/_services/app-util.service';

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
  util: AppUtilService;

  listStatus: [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private utilSvc: AppUtilService
  ) {
    this.util = utilSvc;
  }

  ngOnInit(): void {
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
      this.util.setPageTitle(`edit ${this.rtype} ${this.rid}`);
    }
    else {
      this.util.setPageTitle(`new ${this.rtype}`);
    }
  }

  ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
    this.urlSub.unsubscribe();
  }

  gotoRecord(): void {
    console.log(`gotoRecord(rid: ${this.rid}`);
  }

  logRecord() {
    console.log('logRecord()');
  }

}
