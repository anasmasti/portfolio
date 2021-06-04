import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DialogModalService } from 'src/app/services/dialog-modal.service';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DialogModalComponent implements OnInit {
  @Input() project_name: string = '';
  @Input() technologies_used: string = '';
  @Input() link_of_project: string = '';

  constructor(public modalService: DialogModalService) { }

  ngOnInit(): void {}

  closeModal() {
    this.modalService.close()
  }

}
