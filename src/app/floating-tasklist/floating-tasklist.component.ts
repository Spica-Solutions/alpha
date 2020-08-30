import { Component, OnInit } from '@angular/core';
import { AppUtilService } from 'src/app/_services/app-util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floating-tasklist',
  templateUrl: './floating-tasklist.component.html',
  styleUrls: ['./floating-tasklist.component.css']
})
export class FloatingTasklistComponent implements OnInit {

  util: AppUtilService;

  constructor(
    private utilSvc: AppUtilService
  ) {
    this.util = utilSvc;
  }

  ngOnInit(): void {
  }

  // navTo(t, d): void {
  //   console.log(`t: ${t}`);
  //   console.log(d);
  //   var url = `${t}?id=${d}`;
  //   this.router.navigateByUrl(url);
  // }

}
