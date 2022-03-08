import { TestBed } from '@angular/core/testing';

import { UtilQuipuxService } from './util-quipux.service';

describe('UtilQuipuxService', () => {
  let service: UtilQuipuxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilQuipuxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
