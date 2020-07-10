import { TestBed } from '@angular/core/testing';

import { StatuscheckerService } from './statuschecker.service';

describe('StatuscheckerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatuscheckerService = TestBed.get(StatuscheckerService);
    expect(service).toBeTruthy();
  });
});
