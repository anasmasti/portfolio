import { HttpErrorResponse } from '@angular/common/http';
import { DialogModalService } from './../../services/dialog-modal.service';
import { ResumeService } from './../../services/resume.service';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  resumeKeyAccess!: string
  resumeAccessError!: string
  constructor(
    private title: Title,
    @Inject(DOCUMENT) private document: Document,
    private meta: Meta,
    private resumeService: ResumeService,
    public modalService: DialogModalService
  ) { }

  ngOnInit() {
    this.title.setTitle('About - Anas Masti');
    this.meta.updateTag({
      name: 'description',
      content:
        "Salut, Je m'appelle Anas Masti, Je suis Développeur Web Full-Stack",
    });
    this.meta.updateTag({
      name: 'og:url',
      content: 'https://anasmasti.com/about',
    });
    this.meta.updateTag({ name: 'og:title', content: 'About - Anas Masti' });

    let myslide = this.document.getElementById('myslide');

    myslide?.setAttribute('style', 'display:flex');
    setTimeout(() => {
      myslide?.setAttribute('style', 'display:none');
    }, 1500);
  }

  downloadResume(resumeKeyAccess: string) {
    try {
      // Launch download resume from service
      this.resumeService.getResume(resumeKeyAccess)
      // Emty key input
      this.resumeKeyAccess = ''
      // Close the modal after 500ms 
      setTimeout(() => {
        this.modalService.close()
      }, 500);

    } catch (error) {
      this.resumeAccessError = error.message;
      setTimeout(() => {
        this.resumeAccessError = ''
      }, 2000);
    }
  }

  openModal() {
    this.modalService.open()
  }
}
