import { TestBed } from '@angular/core/testing';

import { MMService } from './mm.service';

describe('MMService', () => {
  let service: MMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
