import { TestBed, inject } from '@angular/core/testing';

import { HtppServiceService } from './htpp-service.service';

describe('HtppServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HtppServiceService]
    });
  });

  it('should be created', inject([HtppServiceService], (service: HtppServiceService) => {
    expect(service).toBeTruthy();
  }));
});
