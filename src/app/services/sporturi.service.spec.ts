import { TestBed } from '@angular/core/testing';

import { SporturiService } from './sporturi.service';

describe('SporturiService', () => {
  let service: SporturiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SporturiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
