import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private title: Title, @Inject(DOCUMENT) private document: Document,) { }

  ngOnInit() {
    this.title.setTitle('About - Anas Masti')

    let myslide = this.document.getElementById('myslide');

    myslide?.setAttribute('style', 'display:flex');
    setTimeout(() => {
      myslide?.setAttribute('style', 'display:none');
    }, 1500);
  }

}
