import { TestBed } from '@angular/core/testing';

import { HeliosService } from './helios.service';

describe('HeliosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeliosService = TestBed.get(HeliosService);
    expect(service).toBeTruthy();
  });
});
