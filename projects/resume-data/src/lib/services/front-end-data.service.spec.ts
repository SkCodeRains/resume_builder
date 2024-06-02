import { TestBed } from '@angular/core/testing';

import { FrontEndDataService } from './front-end-data.service';

describe('FrontEndDataService', () => {
  let service: FrontEndDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontEndDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
