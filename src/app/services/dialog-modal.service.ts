import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogModalService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  open() {
    let dialogModal = this.document.getElementById("dialogModal")
    dialogModal?.classList.add('open')
  }

  close() {
    let dialogModal = this.document.getElementById("dialogModal")
    dialogModal?.classList.remove('open')
  }

}
