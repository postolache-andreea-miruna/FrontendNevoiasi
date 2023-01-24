import { TestBed } from '@angular/core/testing';

import { NevoiasiService } from './nevoiasi.service';

describe('NevoiasiService', () => {
  let service: NevoiasiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NevoiasiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
