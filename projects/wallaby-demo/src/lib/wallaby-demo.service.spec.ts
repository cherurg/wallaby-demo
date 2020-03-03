import { TestBed } from '@angular/core/testing'

import { WallabyDemoService } from './wallaby-demo.service'

describe('WallabyDemoService', () => {
  let service: WallabyDemoService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(WallabyDemoService)
  })

  // Try to change this to fit() or xit()
  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('', () => {
    // Try to change to 6
    expect(5).toEqual(5)
  })
})
