import { TestBed } from '@angular/core/testing';

import { IstoricService } from './istoric.service';

describe('IstoricService', () => {
  let service: IstoricService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IstoricService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
