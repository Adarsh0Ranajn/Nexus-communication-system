import { TestBed } from '@angular/core/testing';

import { StockserService } from './stockser.service';

describe('StockserService', () => {
  let service: StockserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
