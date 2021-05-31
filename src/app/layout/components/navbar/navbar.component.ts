import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// @ts-ignore
import anime from 'animejs/lib/anime.js';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    translate.setDefaultLang('fr');
  }

  ngOnInit() {}

  useLanguage(language: string) {
    this.translate.use(language);
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      anime({
        targets: '.soc_media',
        translateY: ['-220px', 0],
        duration: 2950,
        easing: 'easeInOutExpo',
      });
      anime({
        targets: '.logo',
        translateY: ['-120px', 0],
        duration: 1350,
        easing: 'easeInOutExpo',
      });
    }
  }
}
