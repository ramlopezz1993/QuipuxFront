import { TestBed } from '@angular/core/testing';

import { ServicioQuipuxService } from './servicio-quipux.service';

describe('ServicioQuipuxService', () => {
  let service: ServicioQuipuxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioQuipuxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
