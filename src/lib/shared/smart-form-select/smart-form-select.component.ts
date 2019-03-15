import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { HeliosSmartFormField, HeliosSmartFormConfig } from '../../models/smart-form.model';

@Component({
  selector: 'helios-smart-form-select',
  templateUrl: './smart-form-select.component.html',
  styleUrls: ['./smart-form-select.component.css']
})
export class SmartFormSelectComponent implements OnInit {

  @Input() public dataSource: Observable<any>
  @Input() public field: HeliosSmartFormField
  @Input() public formConfig: HeliosSmartFormConfig

  @Output() public heliosSelectChange: EventEmitter<any> = new EventEmitter()

  public selectModel: any

  constructor() { }

  ngOnInit() {

    // Load initial value
    if (this.field.selectedValue) this.setInitialValue()

  }

  getOptionValue(option: any) {
    if (!this.field.selectOptionField) return option
    if (typeof this.field.selectOptionField === 'string') return option[this.field.selectOptionField]
    if (typeof this.field.selectOptionField === 'function') return this.field.selectOptionField(option)
  }

  getOptionLabel(option: any) {
    if (!this.field.selectOptionLabel) return option
    if (typeof this.field.selectOptionLabel === 'string') return option[this.field.selectOptionLabel]
    if (typeof this.field.selectOptionLabel === 'function') return this.field.selectOptionLabel(option)
  }

  private async setInitialValue() {

    const options: any[] = await this.dataSource.pipe(take(1)).toPromise()

    for (const option of options) {
      if (this.field.selectedValue(option)) this.selectModel = option
    }

  }

  isSelected(option: any): boolean {
    console.log(this.field.selectedValue(option))
    if (!this.field.selectedValue) return false
    if (typeof this.field.selectedValue === 'function') return this.field.selectedValue(option)
    return false
  }

  selectChange(value: any) {
    this.heliosSelectChange.next(value)
  }

  get selectClasses(): string[] {

    let classes = []

    if (this.formConfig.stylingBootstrap) classes.push('form-control')

    return classes

  }

}
