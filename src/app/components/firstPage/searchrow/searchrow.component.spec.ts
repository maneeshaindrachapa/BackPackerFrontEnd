import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchrowComponent } from './searchrow.component';

describe('SearchrowComponent', () => {
  let component: SearchrowComponent;
  let fixture: ComponentFixture<SearchrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
