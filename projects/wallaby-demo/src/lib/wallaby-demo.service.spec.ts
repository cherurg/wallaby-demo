import { TestBed } from '@angular/core/testing';

import { WallabyDemoService } from './wallaby-demo.service';

describe('WallabyDemoService', () => {
  let service: WallabyDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WallabyDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
