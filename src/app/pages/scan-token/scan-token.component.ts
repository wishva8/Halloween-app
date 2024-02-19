import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan-token',
  templateUrl: './scan-token.component.html',
  styleUrls: ['./scan-token.component.scss'],
})
export class ScanTokenComponent {
  scrollState: string = 'start';
  navigationTimeout: any;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  autoScroll() {
  }
}
