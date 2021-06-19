import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { DialogModalService } from 'src/app/services/dialog-modal.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  project_name: string = '';
  technologies_used: string = '';
  link_of_project: string = '';

  constructor(
    private title: Title,
    @Inject(DOCUMENT) private document: Document,
    private meta: Meta,
    public modalService: DialogModalService
  ) {}

  ngOnInit() {
    this.title.setTitle('Projects - Anas Masti');
    this.meta.updateTag({
      name: 'description',
      content:
        "Salut, Je m'appelle Anas Masti, Je suis Développeur Web Full-Stack",
    });
    this.meta.updateTag({
      name: 'og:url',
      content: 'https://anasmasti.com/project',
    });
    this.meta.updateTag({ name: 'og:title', content: 'Projects - Anas Masti' });

    let slide = this.document.getElementById('main-slide');

    slide?.setAttribute('style', 'display:flex');
    setTimeout(() => {
      slide?.setAttribute('style', 'display:none');
    }, 1500);
  }

  openModal(targetId: any) {
    // Open modal on poject clicked
    this.modalService.open();
    // Select project title
    let targetTitle = this.document.querySelector(`#${targetId} div h3`);
    // Select project link
    let targetLink = this.document.querySelector(`#${targetId} div span`);
    // Select project technologies
    let targetTechno = this.document.querySelector(`#${targetId} div pre`);
    // Get value of project title
    let targetTitleContent = targetTitle?.textContent;
    // Get value of project link
    let targetLinkContent = targetLink?.textContent;
    // Get value of project technologies
    let targetTechnoContent = targetTechno?.textContent;
    // Put project title on modal
    this.project_name = targetTitleContent || '';
    // Put project link on modal
    this.link_of_project = targetLinkContent || '';
    // Put project technologies on modal
    this.technologies_used = targetTechnoContent || '';
  }
}
