import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppUtilService } from 'src/app/_services/app-util.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  rtype: string = "";
  rid: string = "";
  paramsSub: any;
  urlSub: any;
  pageTitle: string = "Page Title";

  // Services
  subscription: Subscription;
  util: AppUtilService;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private utilSvc: AppUtilService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.util = utilSvc;
  }

  ngOnInit(): void {
    this.subscription = this.util.onSetPageTitleChange().subscribe(d => {
      if (d) {
        this.pageTitle = d;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
