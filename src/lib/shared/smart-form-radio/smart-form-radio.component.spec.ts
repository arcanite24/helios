import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartFormRadioComponent } from './smart-form-radio.component';

describe('SmartFormRadioComponent', () => {
  let component: SmartFormRadioComponent;
  let fixture: ComponentFixture<SmartFormRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartFormRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartFormRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
