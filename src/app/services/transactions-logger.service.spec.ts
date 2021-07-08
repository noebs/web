import { TestBed } from '@angular/core/testing';

import { TransactionsLoggerService } from './transactions-logger.service';

describe('TransactionsLoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionsLoggerService = TestBed.get(TransactionsLoggerService);
    expect(service).toBeTruthy();
  });
});
