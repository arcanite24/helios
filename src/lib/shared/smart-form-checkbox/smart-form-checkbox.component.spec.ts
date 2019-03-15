import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartFormCheckboxComponent } from './smart-form-checkbox.component';

describe('SmartFormCheckboxComponent', () => {
  let component: SmartFormCheckboxComponent;
  let fixture: ComponentFixture<SmartFormCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartFormCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartFormCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
