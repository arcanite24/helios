import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartFormSelectComponent } from './smart-form-select.component';

describe('SmartFormSelectComponent', () => {
  let component: SmartFormSelectComponent;
  let fixture: ComponentFixture<SmartFormSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartFormSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartFormSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
