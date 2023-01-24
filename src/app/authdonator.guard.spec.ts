import { TestBed } from '@angular/core/testing';

import { AuthdonatorGuard } from './authdonator.guard';

describe('AuthdonatorGuard', () => {
  let guard: AuthdonatorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthdonatorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
