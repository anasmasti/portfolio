import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DialogModalService } from 'src/app/services/dialog-modal.service';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DialogModalComponent implements OnInit {


  constructor(public modalService: DialogModalService) { }

  ngOnInit(): void {}

  closeModal() {
    this.modalService.close()
  }

}
