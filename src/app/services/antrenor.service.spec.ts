import { TestBed } from '@angular/core/testing';

import { AntrenorService } from './antrenor.service';

describe('AntrenorService', () => {
  let service: AntrenorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntrenorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
