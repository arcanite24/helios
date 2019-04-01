import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { take } from 'rxjs/operators';
import { HeliosSmartFormField, HeliosSmartFormConfig } from '../../models/smart-form.model';

@Component({
  selector: 'helios-smart-form-radio',
  templateUrl: './smart-form-radio.component.html',
  styleUrls: ['./smart-form-radio.component.css']
})
export class SmartFormRadioComponent implements OnInit {

  @Input() public field: HeliosSmartFormField
  @Input() public formConfig: HeliosSmartFormConfig

  @Output() public heliosRadioChange: EventEmitter<any> = new EventEmitter()

  public selectModel: any

  constructor() { }

  ngOnInit() {

    // Load initial value
    if (this.field.selectedValue) this.setInitialValue()

  }

  getOptionValue(option: any): string {
    if (!this.field.radioOptionField) return option
    if (typeof this.field.radioOptionField === 'string') return option[this.field.radioOptionField]
    if (typeof this.field.radioOptionField === 'function') return this.field.radioOptionField(option)
  }

  getOptionLabel(option: any): string {
    if (!this.field.radioOptionLabel) return option
    if (typeof this.field.radioOptionLabel === 'string') return option[this.field.radioOptionLabel as string]
    if (typeof this.field.radioOptionLabel === 'function') {
      const fn = this.field.radioOptionLabel as Function
      return fn(option)
    }
  }

  private async setInitialValue() {

    const options: any[] = await this.field.radioDataSource.pipe(take(1)).toPromise()

    for (const option of options) {
      if (this.field.selectedValue(option)) this.selectModel = option
    }

  }

  isSelected(option: any): boolean {
    if (!this.field.selectedValue) return false
    if (typeof this.field.selectedValue === 'function') return this.field.selectedValue(option)
    return false
  }

  radioChange(value: any) {
    this.heliosRadioChange.next(value)
  }

  get groupClasses(): string[] {

    let classes = []

    if (this.formConfig.stylingBootstrap) classes.push('row')

    return classes

  }

  get radioClasses(): string[] {

    let classes = []

    if (this.formConfig.stylingBootstrap) classes.push('col-md-12')

    return classes

  }

}
