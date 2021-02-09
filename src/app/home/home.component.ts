import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// @ts-ignore
import anime from 'animejs/lib/anime.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Anas Masti')
  }

  ngAfterViewInit(): void {


   setTimeout(() => {
    anime.timeline({loop: false})
    .add({
      targets: '.mytitle .el',
      translateY: ["-1.7em", 0],
      translateZ: 0,
      duration: 1250,
      // delay: (el, i) => 50 * i
    }).add({
      targets: '.mytitle',
      duration: 1000,
      easing: "easeOutExpo",
      delay: 100
    }); }, 300);
    anime({
      targets: '.myicon',
      translateY: [30,0],
      easing: 'easeInOutQuad',
      direction: 'alternate',
      duration: 650,
      loop: true,
    })

  }
}
