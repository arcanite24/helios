import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeliosSmartFormConfig, HeliosSmartFormField } from '../../models/smart-form.model';

@Component({
  selector: 'helios-smart-form-checkbox',
  templateUrl: './smart-form-checkbox.component.html',
  styleUrls: ['./smart-form-checkbox.component.css']
})
export class SmartFormCheckboxComponent implements OnInit {

  @Input() public config: HeliosSmartFormConfig
  @Input() public field: HeliosSmartFormField

  @Output() public heliosCheckboxChange: EventEmitter<boolean> = new EventEmitter()

  public checkboxModel: boolean

  constructor() { }

  ngOnInit() {

    this.loadInitialValue(this.field)

  }

  onCheckboxChange(value: boolean) {
    this.heliosCheckboxChange.next(value)
  }

  loadInitialValue(field: HeliosSmartFormField) {
    if (!field) return false
    if (!field.checkboxSelected) return false
    if (typeof field.checkboxSelected !== 'function') return false
    this.checkboxModel = field.checkboxSelected(field)
  }

}
