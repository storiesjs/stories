import { TestBed } from '@angular/core/testing';

import { StoriesRendererService } from './stories-renderer.service';

describe('StoriesRendererService', () => {
  let service: StoriesRendererService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoriesRendererService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
