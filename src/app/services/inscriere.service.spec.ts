import { TestBed } from '@angular/core/testing';

import { InscriereService } from './inscriere.service';

describe('InscriereService', () => {
  let service: InscriereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscriereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
