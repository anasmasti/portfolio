import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-main-loading',
  templateUrl: './main-loading.component.html',
  styleUrls: ['./main-loading.component.css'],
})
export class MainLoadingComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    let myslide = this.document.getElementById('myslide');
    setTimeout(() => {
      myslide?.setAttribute('style', 'display:none');
    }, 1500);
  }
}
