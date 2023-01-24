import { TestBed } from '@angular/core/testing';

import { AuthnevoiasGuard } from './authnevoias.guard';

describe('AuthnevoiasGuard', () => {
  let guard: AuthnevoiasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthnevoiasGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
