import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
// @ts-ignore
import anime from 'animejs/lib/anime.js';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private title: Title, @Inject(DOCUMENT) private document: Document,
  @Inject(PLATFORM_ID) private platformId: Object, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Contact - Anas Masti')
    this.meta.updateTag({ name: 'description', content: "Salut, Je m'appelle Anas Masti, Je suis Développeur Web Full-Stack" })
    this.meta.updateTag({ name: 'og:url', content: 'https://anasmasti.com/contact' })
    this.meta.updateTag({ name: 'og:title', content: 'Contact - Anas Masti' })

    let myslide = this.document.getElementById('myslide');

    myslide?.setAttribute('style', 'display:flex');
    setTimeout(() => {
      myslide?.setAttribute('style', 'display:none');
    }, 1500);

  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
    anime.timeline({loop: true})
    .add({
      targets: '.myicon .el',
      translateX: {
        value: '*=2.5', // 100px * 2.5 = '250px'
        duration: 1000
      },
      width: {
        value: '-=20px', // 28 - 20 = '8px'
        duration: 1800,
        easing: 'easeInOutSine'
      },
      rotate: {
        value: '+=2turn', // 0 + 2 = '2turn'
        duration: 1800,
        easing: 'easeInOutSine'
      },
      direction: 'alternate'
    })}
  }
}
