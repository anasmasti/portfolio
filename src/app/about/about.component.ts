import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private title: Title, @Inject(DOCUMENT) private document: Document, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('About - Anas Masti')
    this.meta.updateTag({ name: 'description', content: "Salut, Je m'appelle Anas Masti, Je suis Développeur Web Full-Stack" })
    this.meta.updateTag({ name: 'og:url', content: 'https://anasmasti.com/about' })
    this.meta.updateTag({ name: 'og:title', content: 'About - Anas Masti' })

    let myslide = this.document.getElementById('myslide');

    myslide?.setAttribute('style', 'display:flex');
    setTimeout(() => {
      myslide?.setAttribute('style', 'display:none');
    }, 1500);
  }

}
