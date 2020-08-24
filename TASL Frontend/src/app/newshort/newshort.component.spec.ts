import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewshortComponent } from './newshort.component';

describe('NewshortComponent', () => {
  let component: NewshortComponent;
  let fixture: ComponentFixture<NewshortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewshortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewshortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
