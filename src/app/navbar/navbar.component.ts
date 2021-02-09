import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
// @ts-ignore
import anime from 'animejs/lib/anime.js'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');
  }

  ngOnInit() {}

  useLanguage(language: string) {
    this.translate.use(language)
  }

  ngAfterViewInit(): void {

    anime({
      targets: '.items_menu',
      translateX: ['-200%', 0],
      easing: 'easeInOutExpo',
      duration: 1950,
    });
    anime({
      targets: '.soc_media',
      translateY: ['-220px', 0],
      duration: 1950,
      easing: 'easeInOutExpo'
    });
    anime({
      targets: '.logo',
      translateY: ['-120px', 0],
      duration: 950,
      easing: 'easeInOutExpo'
    });


  }



}
