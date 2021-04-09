import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @ViewChild('model')
  model!: ElementRef;
  constructor(private title: Title,
    @Inject(DOCUMENT) private document: Document, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Projects - Anas Masti')
    let myslide = this.document.getElementById('myslide');
    this.meta.updateTag({ name: 'description', content: "Salut, Je m'appelle Anas Masti, Je suis Développeur Web Full-Stack" })
    this.meta.updateTag({ name: 'og:url', content: 'https://anasmasti.com/project' })
    this.meta.updateTag({ name: 'og:title', content: 'Projects - Anas Masti' })

    myslide?.setAttribute('style', 'display:flex');
    setTimeout(() => {
      myslide?.setAttribute('style', 'display:none');
    }, 1500);

  }
  openModel() {
    this.model.nativeElement.style.display = "block";
  }
  closeModel() {
    this.model.nativeElement.style.display = "none";
  }
}
