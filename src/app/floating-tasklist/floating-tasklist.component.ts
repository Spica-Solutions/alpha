import { Component, OnInit } from '@angular/core';
import { AppUIService } from 'src/app/_services/app-ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floating-tasklist',
  templateUrl: './floating-tasklist.component.html',
  styleUrls: ['./floating-tasklist.component.css']
})
export class FloatingTasklistComponent implements OnInit {

  ui: AppUIService;

  constructor(
    private uiSvc: AppUIService
  ) {
    this.ui = uiSvc;
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
