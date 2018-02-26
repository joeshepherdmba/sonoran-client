import { TestBed, inject } from '@angular/core/testing';

import { AzuretableService } from './azuretable.service';

describe('AzuretableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AzuretableService]
    });
  });

  it('should be created', inject([AzuretableService], (service: AzuretableService) => {
    expect(service).toBeTruthy();
  }));
});
