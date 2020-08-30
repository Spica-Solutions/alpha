import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingTasklistComponent } from './floating-tasklist.component';

describe('FloatingTasklistComponent', () => {
  let component: FloatingTasklistComponent;
  let fixture: ComponentFixture<FloatingTasklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingTasklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingTasklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
