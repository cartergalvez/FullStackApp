import { TestBed } from '@angular/core/testing';

import { BtwDataService } from './btw-data.service';

describe('BtwDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BtwDataService = TestBed.get(BtwDataService);
    expect(service).toBeTruthy();
  });
});
