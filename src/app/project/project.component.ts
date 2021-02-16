import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.title.setTitle('Projects - Anas Masti')
    let myslide = this.document.getElementById('myslide');

    myslide?.setAttribute('style', 'display:flex');
    setTimeout(() => {
      myslide?.setAttribute('style', 'display:none');
    }, 1500);

  }
openModel() {
  this.model.nativeElement.style.display = "block";
}
closeModel(){
  this.model.nativeElement.style.display = "none";
}
}
