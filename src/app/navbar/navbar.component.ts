import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
// @ts-ignore
import anime from 'animejs/lib/anime.js'
import { FullscreenService } from './fullscreen.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('myMenu')
  myMenu!: ElementRef;
  isShown = false;
  constructor(private fullscreen: FullscreenService, private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object) {
    translate.setDefaultLang('fr');
  }

  ngOnInit() {}

  menuchange() {
    this.myMenu.nativeElement.classList.toggle("change");
  }

  useLanguage(language: string) {
    this.translate.use(language)
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
    anime({
      targets: '.items_menu',
      translateX: ['-200%', 0],
      easing: 'easeInOutExpo',
      duration: 3950,
    });
    anime({
      targets: '.mymenu',
      translateX: ['-200%', 0],
      easing: 'easeInOutExpo',
      duration: 4800,
    });
    anime({
      targets: '.fullscreenbtn',
      translateX: ['-200%', 0],
      easing: 'easeInOutExpo',
      duration: 4800,
    });
    anime({
      targets: '.soc_media',
      translateY: ['-220px', 0],
      duration: 2950,
      easing: 'easeInOutExpo'
    });
    anime({
      targets: '.logo',
      translateY: ['-120px', 0],
      duration: 1350,
      easing: 'easeInOutExpo'
    });
  }
  }

  showFullMenu(){
    let myfullMenu = this.document.getElementById('fullmenu');
    if (!this.isShown) {
      myfullMenu?.setAttribute('style', 'display:flex');
      this.isShown = true
    }else{
      myfullMenu?.classList.add('hidefullmenu')
      this.isShown = false
      setTimeout(() => {
       myfullMenu?.setAttribute('style', 'display:none');
       myfullMenu?.classList.remove('hidefullmenu')
      }, 1500);
    }
   }

  showFullscreen() {
    this.fullscreen.toggle();
    }

}
