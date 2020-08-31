import { Component, OnInit } from '@angular/core';
import { AppUIService } from 'src/app/_services/app-ui.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {

  ui: AppUIService;

  constructor(
    private uiSvc: AppUIService
  ) {
    this.ui = uiSvc;
  }

  ngOnInit(): void {
  }

  focusSearch(): void {

  }

  blurSearch(): void {
    
  }
}
