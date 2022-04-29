import { TestBed } from '@angular/core/testing';

import { VendorserService } from './vendorser.service';

describe('VendorserService', () => {
  let service: VendorserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
