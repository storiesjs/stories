import { TestBed } from '@angular/core/testing';

import { StoriesAngularService } from './stories-angular.service';

describe('StoriesAngularService', () => {
  let service: StoriesAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoriesAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
