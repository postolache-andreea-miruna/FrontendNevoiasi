import { TestBed } from '@angular/core/testing';

import { NevoiasService } from './nevoias.service';

describe('NevoiasService', () => {
  let service: NevoiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NevoiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
