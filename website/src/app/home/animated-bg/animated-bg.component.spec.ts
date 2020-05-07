import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedBgComponent } from './animated-bg.component';

describe('AnimatedBgComponent', () => {
  let component: AnimatedBgComponent;
  let fixture: ComponentFixture<AnimatedBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
