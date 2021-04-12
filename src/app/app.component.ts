import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private title: Title,
    @Inject(DOCUMENT) private document: Document,
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Anas Masti')
    let myslide = this.document.getElementById('myslide');
    setTimeout(() => {
      myslide?.setAttribute('style', 'display:none');
    }, 1500);
  }
}


