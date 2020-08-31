import { TestBed } from '@angular/core/testing';

import { AppUIService } from './app-ui.service';

describe('AppUIService', () => {
  let service: AppUIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
