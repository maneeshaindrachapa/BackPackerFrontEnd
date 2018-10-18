import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPageFullComponent } from './second-page-full.component';

describe('SecondPageFullComponent', () => {
  let component: SecondPageFullComponent;
  let fixture: ComponentFixture<SecondPageFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondPageFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPageFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
