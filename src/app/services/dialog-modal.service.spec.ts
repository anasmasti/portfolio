import { TestBed } from '@angular/core/testing';

import { DialogModalService } from './dialog-modal.service';

describe('ModalService', () => {
  let service: DialogModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
