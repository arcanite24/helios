import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartFormFileUploaderComponent } from './smart-form-file-uploader.component';

describe('SmartFormFileUploaderComponent', () => {
  let component: SmartFormFileUploaderComponent;
  let fixture: ComponentFixture<SmartFormFileUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartFormFileUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartFormFileUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
