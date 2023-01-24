import { TestBed } from '@angular/core/testing';

import { DonatoriService } from './donatori.service';

describe('DonatoriService', () => {
  let service: DonatoriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonatoriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
