import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  structuredDataSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Anas Masti',
    'url': 'https://anasmasti.com',
    'image': 'https://anasmasti.com/assets/images/contact/online.svg',
    'telephone': '+212660548100',
    'email': 'anasmasti@hotmail.com',
    'hasMap':
      'https://www.google.com/maps/place/Casablanca/@33.5724108,-7.6570327,12z/data=!3m1!4b1!4m5!3m4!1s0xda7cd4778aa113b:0xb06c1d84f310fd3!8m2!3d33.5731104!4d-7.5898434?hl=fr',
    'description':
      "Je m'appelle Anas MASTI, je suis un Développeur Web 			Full-Stack et Designer, passionné par la création des sites web de 			qualités ergonomiques et responsive et adaptable sur n'importe quel 		appareil.",
    'sameAs': [
      'https://www.facebook.com/anas.masti.96',
      'https://www.linkedin.com/in/anas-masti-616040189',
      'https://twitter.com/AnasMasti',
    ],
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'MA',
      'addressRegion': 'Casablanca',
      'postalCode': '20230',
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+212660548100',
      'contactType': 'customer service',
    },
  };

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Anas Masti');
  }
}
