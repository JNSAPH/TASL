import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { URLListComponent } from './urllist.component';

describe('URLListComponent', () => {
  let component: URLListComponent;
  let fixture: ComponentFixture<URLListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ URLListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(URLListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
