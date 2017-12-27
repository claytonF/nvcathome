import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JnComponent } from './jn.component';

describe('JnComponent', () => {
  let component: JnComponent;
  let fixture: ComponentFixture<JnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
