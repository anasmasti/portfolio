import {
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { FullscreenService } from '../../../services/fullscreen.service';
// @ts-ignore
import anime from 'animejs/lib/anime.js';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css'],
})
export class SideNavbarComponent {
  @ViewChild('myMenu')
  myMenu!: ElementRef;
  isShown = false;

  constructor(
    private fullscreen: FullscreenService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  menuchange() {
    this.myMenu.nativeElement.classList.toggle('change');
  }

  showFullMenu() {
    let myfullMenu = this.document.querySelector('#fullmenu');
    
    if (!this.isShown) {
      myfullMenu?.setAttribute('style', 'display:flex');
      this.isShown = true;
    } else {
      myfullMenu?.classList.add('hide-full-menu');
      this.isShown = false;
      setTimeout(() => {
        myfullMenu?.setAttribute('style', 'display:none');
        myfullMenu?.classList.remove('hide-full-menu');
      }, 1500);
    }
  }

  showFullscreen() {
    this.fullscreen.toggle();
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      anime({
        targets: '.items-menu',
        translateX: ['-200%', 0],
        easing: 'easeInOutExpo',
        duration: 3950,
      });
      anime({
        targets: '.main-menu',
        translateX: ['-200%', 0],
        easing: 'easeInOutExpo',
        duration: 4800,
      });
      anime({
        targets: '.full-screen-btn',
        translateX: ['-200%', 0],
        easing: 'easeInOutExpo',
        duration: 4800,
      });
    }
  }
}
