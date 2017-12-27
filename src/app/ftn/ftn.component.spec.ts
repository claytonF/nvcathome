import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtnComponent } from './ftn.component';

describe('FtnComponent', () => {
  let component: FtnComponent;
  let fixture: ComponentFixture<FtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
