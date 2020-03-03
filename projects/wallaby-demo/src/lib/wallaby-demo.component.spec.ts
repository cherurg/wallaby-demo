import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallabyDemoComponent } from './wallaby-demo.component';

describe('WallabyDemoComponent', () => {
  let component: WallabyDemoComponent;
  let fixture: ComponentFixture<WallabyDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallabyDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallabyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
