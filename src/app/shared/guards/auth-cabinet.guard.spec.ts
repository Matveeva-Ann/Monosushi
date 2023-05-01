import { TestBed } from '@angular/core/testing';

import { AuthCabinetGuard } from './auth-cabinet.guard';

describe('AuthCabinetGuard', () => {
  let guard: AuthCabinetGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthCabinetGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
