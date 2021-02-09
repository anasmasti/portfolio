import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
// @ts-ignore
import anime from 'animejs/lib/anime.js';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Contact - Anas Masti')

  }

  ngAfterViewInit(): void {
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
    })
  }
}
