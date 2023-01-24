import { TestBed } from '@angular/core/testing';

import { DonareService } from './donare.service';

describe('DonareService', () => {
  let service: DonareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
