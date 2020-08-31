import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppUIService } from 'src/app/_services/app-ui.service';

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
  ui: AppUIService;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private uiSvc: AppUIService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.ui = uiSvc;
  }

  ngOnInit(): void {
    this.subscription = this.ui.onSetPageTitleChange().subscribe(d => {
      if (d) {
        this.pageTitle = d;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
