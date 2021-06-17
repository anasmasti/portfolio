import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
// @ts-ignore
import anime from 'animejs/lib/anime.js';
import { DialogModalService } from 'src/app/services/dialog-modal.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  isSended: boolean = false
  errorMessage: string = ''

  // Set up contact form controls
  contactForm = new FormGroup({
    first_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
    ]),
    last_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    phone: new FormControl(),
    email: new FormControl(null, [
      Validators.email
    ]),
    message: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(1200)
    ]),
  });


  constructor(
    private title: Title,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    public modalService: DialogModalService,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    // Change title of page
    this.title.setTitle('Contact - Anas Masti');

    // Put some metatags
    this.meta.updateTag({
      name: 'description',
      content:
        "Salut, Je m'appelle Anas Masti, Je suis Développeur Web Full-Stack",
    });
    this.meta.updateTag({
      name: 'og:url',
      content: 'https://anasmasti.com/contact',
    });
    this.meta.updateTag({ name: 'og:title', content: 'Contact - Anas Masti' });

    // Lunch loading page 
    let myslide = this.document.getElementById('myslide');

    myslide?.setAttribute('style', 'display:flex');
    setTimeout(() => {
      myslide?.setAttribute('style', 'display:none');
    }, 1500);
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      anime.timeline({ loop: true }).add({
        targets: '.myicon .el',
        translateX: {
          value: '*=2.5', // 100px * 2.5 = '250px'
          duration: 1000,
        },
        width: {
          value: '-=20px', // 28 - 20 = '8px'
          duration: 1800,
          easing: 'easeInOutSine',
        },
        rotate: {
          value: '+=2turn', // 0 + 2 = '2turn'
          duration: 1800,
          easing: 'easeInOutSine',
        },
        direction: 'alternate',
      });
    }
  }

  // Open the contact form 
  openModal() {
    this.modalService.open()
  }

  // Send message to database
  sendMessage() {
    // get data from form
    let data: any = {
      first_name: this.contactForm.get('first_name')?.value,
      last_name: this.contactForm.get('last_name')?.value,
      phone: this.contactForm.get('phone')?.value,
      email: this.contactForm.get('email')?.value,
      message: this.contactForm.get('message')?.value,
    }
    // convert data to json for submit it
    let dataToJson: any = JSON.stringify(data)
    // call contact service to post data to the server
    this.contactService.sendContactMessage(dataToJson).subscribe(() => {
      this.isSended = true; // make sending statut true

      // then close the modal after after done message 
      setTimeout(() => {
        this.modalService.close()
        // clear form with statut
        this.contactForm.reset() // reset form
        this.isSended = false // make message done statut false
        this.errorMessage = ''
      }, 1800);

    }, (error) => { 
      // Put the server error to errorMessage variable to show it
      this.errorMessage = error.error.message

      // Hide the message error after 2 seconds
      setTimeout(() => {
        this.errorMessage = ''
      }, 2000);
    }
    )
  }

  // Get form contols for us'em on html
  get first_name() { return this.contactForm.get('first_name'); }
  get last_name() { return this.contactForm.get('last_name'); }
  get phone() { return this.contactForm.get('phone'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

  // Check if all inputs has invalid errors
  checkInputsValidation(targetInput: any) {
    return targetInput?.invalid && (targetInput.dirty || targetInput.touched)
  }

}
