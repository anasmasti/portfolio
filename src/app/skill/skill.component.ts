import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  constructor(private title: Title, @Inject(DOCUMENT) private document: Document,  @Inject(PLATFORM_ID) private platformId: Object ) { }

  ngOnInit() {
    this.title.setTitle('Skills - Anas Masti')
    let myslide = this.document.getElementById('myslide');

    myslide?.setAttribute('style', 'display:flex');
    setTimeout(() => {
      myslide?.setAttribute('style', 'display:none');
    }, 1500);
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
    anime({
      targets: '.myicon',
      translateX: 10,
      direction: 'alternate',
      loop: true,
      easing: 'linear'
    })
  }
  }
}
