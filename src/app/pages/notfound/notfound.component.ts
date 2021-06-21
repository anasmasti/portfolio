import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css'],
})
export class NotfoundComponent implements OnInit {
  constructor(
    private title: Title,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Not Found - Anas Masti');
    this.meta.updateTag({
      name: 'description',
      content:
        "Salut, Je m'appelle Anas Masti, Je suis Développeur Web Full-Stack",
    });
    this.meta.updateTag({
      name: 'og:url',
      content: 'https://anasmasti.com/skill',
    });
    this.meta.updateTag({
      name: 'og:title',
      content: 'Not Found - Anas Masti',
    });

    let slide = this.document.getElementById('main-slide');

    slide?.setAttribute('style', 'display:flex');
    setTimeout(() => {
      slide?.setAttribute('style', 'display:none');
    }, 1500);
  }
}
