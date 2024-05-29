import { TestBed } from '@angular/core/testing';

import { GenerateStoryService } from './generate-story.service';

describe('GenerateStoryService', () => {
  let service: GenerateStoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateStoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
