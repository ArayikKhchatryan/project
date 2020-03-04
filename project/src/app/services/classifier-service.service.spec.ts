import { TestBed } from '@angular/core/testing';

import { ClassifierServiceService } from './classifier-service.service';

describe('ClassifierServiceService', () => {
  let service: ClassifierServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassifierServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
