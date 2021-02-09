import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Skills - Anas Masti')

  }

  ngAfterViewInit(): void {
    anime({
      targets: '.myicon',
      translateX: 10,
      direction: 'alternate',
      loop: true,
      easing: 'linear'
    })

  }
}
