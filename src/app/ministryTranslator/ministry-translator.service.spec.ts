import { TestBed } from '@angular/core/testing';

import { MinistryTranslatorService } from './ministry-translator.service';

describe('MinistryTranslatorService', () => {
  let service: MinistryTranslatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinistryTranslatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
