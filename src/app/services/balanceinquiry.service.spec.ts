import { TestBed } from '@angular/core/testing';

import { BalanceinquiryService } from './balanceinquiry.service';

describe('BalanceinquiryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BalanceinquiryService = TestBed.get(BalanceinquiryService);
    expect(service).toBeTruthy();
  });
});
