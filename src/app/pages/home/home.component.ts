import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

// @ts-ignore
import anime from 'animejs/lib/anime.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('myName')
  myName!: ElementRef;

  constructor(
    private title: Title,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.title.setTitle('Anas Masti');
    this.meta.updateTag({
      name: 'description',
      content:
        "Salut, Je m'appelle Anas Masti, Je suis Développeur Web Full-Stack",
    });
    this.meta.updateTag({ name: 'og:url', content: 'https://anasmasti.com' });
    this.meta.updateTag({ name: 'og:title', content: 'Anas Masti' });

    let myslide = this.document.getElementById('myslide');

    myslide?.setAttribute('style', 'display:flex');
    setTimeout(() => {
      myslide?.setAttribute('style', 'display:none');
    }, 1500);
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.myName.nativeElement.innerHTML =
        this.myName.nativeElement.textContent.replace(
          /\S/g,
          "<span class='el' style='display:inline-block;'>$&</span>"
        );
      setTimeout(() => {
        anime
          .timeline({ loop: false })
          .add({
            targets: '.mytitle .el',
            translateY: ['-1.7em', 0],
            translateZ: 0,
            duration: 1250,
            delay: (el: any, i: any) => 50 * i,
          })
          .add({
            targets: '.mytitle',
            duration: 1000,
            easing: 'easeOutExpo',
            delay: 100,
          });
      }, 1300);
      anime({
        targets: '.myicon',
        translateY: [30, 0],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 650,
        loop: true,
      });
    }
  }
}