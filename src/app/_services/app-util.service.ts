import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppUtilService {

  pageTitle: string = "";
  pageTitleChange: Subject<string> = new Subject<string>();

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.pageTitle = "";
  }

  navTo(page, parms?): void {
    var url = `${page}`;

    if (parms) {
      url += '?';
      for(let [k, v] of Object.entries(parms)) {
        url += `${k}=${v}&`;
      }
    }

    console.log(`url: ${url}`);
    this.router.navigateByUrl(url);
  }

  setPageTitle(str) {
    console.log(`  >> setPageTitle('${str}')`);
    this.pageTitle = str;
    this.pageTitleChange.next(this.pageTitle);
  }

  onSetPageTitleChange(): Observable<any> {
    return this.pageTitleChange.asObservable();
  }
}
