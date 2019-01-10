import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedbackgroundComponent } from './animatedbackground.component';

describe('AnimatedbackgroundComponent', () => {
  let component: AnimatedbackgroundComponent;
  let fixture: ComponentFixture<AnimatedbackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedbackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedbackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
