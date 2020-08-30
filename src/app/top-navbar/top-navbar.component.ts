import { Component, OnInit } from '@angular/core';
import { AppUtilService } from 'src/app/_services/app-util.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {

  util: AppUtilService;

  constructor(
    private utilSvc: AppUtilService
  ) {
    this.util = utilSvc;
  }

  ngOnInit(): void {
  }

  focusSearch(): void {

  }

  blurSearch(): void {
    
  }
}
