import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageFullComponent } from './first-page-full.component';

describe('FirstPageFullComponent', () => {
  let component: FirstPageFullComponent;
  let fixture: ComponentFixture<FirstPageFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPageFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
