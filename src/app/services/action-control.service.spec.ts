import { TestBed } from '@angular/core/testing';

import { ActionControlService } from './action-control.service';

describe('ActionControlService', () => {
  let service: ActionControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
