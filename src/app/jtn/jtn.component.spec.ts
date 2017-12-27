import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JtnComponent } from './jtn.component';

describe('JtnComponent', () => {
  let component: JtnComponent;
  let fixture: ComponentFixture<JtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
