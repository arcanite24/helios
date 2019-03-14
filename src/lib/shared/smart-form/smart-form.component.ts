import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HeliosSmartFormConfig, HeliosSmartFormTypes } from '../../models/smart-form.model';
import { heliosDefaultSubmitButtonText } from '../../models/smart-form.defaults';
import { HELIOS_CONFIG } from '../../models/helios.models';

@Component({
  selector: 'helios-smart-form',
  templateUrl: './smart-form.component.html',
  styleUrls: ['./smart-form.component.css']
})
export class SmartFormComponent implements OnInit {

  @Input() public config: HeliosSmartFormConfig

  @Output() public heliosSubmit: EventEmitter<any> = new EventEmitter()

  public rxForm: FormGroup = this.formBuilder.group({})

  // Defaults 
  public defaultSubmitButtonText = heliosDefaultSubmitButtonText

  public nativeTypes: HeliosSmartFormTypes[] = [
    HeliosSmartFormTypes.Text,
    HeliosSmartFormTypes.Number,
    HeliosSmartFormTypes.Password,
    HeliosSmartFormTypes.Email,
    HeliosSmartFormTypes.Color,
    HeliosSmartFormTypes.Date,
    HeliosSmartFormTypes.DatetimeLocal,
    HeliosSmartFormTypes.Month,
    HeliosSmartFormTypes.Range,
    HeliosSmartFormTypes.Search,
    HeliosSmartFormTypes.Telephone,
    HeliosSmartFormTypes.Time,
    HeliosSmartFormTypes.Url,
    HeliosSmartFormTypes.Week
  ]

  public FieldTypes = HeliosSmartFormTypes

  constructor(
    @Inject(HELIOS_CONFIG) private heliosConfig,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    console.log('helios config', this.heliosConfig)

    // Build rxForm based on config
    this.buildRxForm(this.config)

  }

  // Graphical Customization getters
  get formClasses(): string[] {

    let classes = []

    if (this.config.stylingBootstrap) classes.push('row')

    return classes

  }

  get fieldClasses(): string[] {

    let classes = []

    if (this.config.stylingBootstrap) classes.push('col-xs-12 col-md-12')

    return classes

  }

  get inputContainerClasses(): string[] {

    let classes = []

    if (this.config.stylingBootstrap) classes.push('form-group')

    return classes

  }

  get inputTagClasses(): string[] {

    let classes = []

    if (this.config.stylingBootstrap) classes.push('form-control')

    return classes

  }

  get submitButtonClasses(): string[] {

    let classes = []

    if (this.config.stylingBootstrap) {
      classes.push('btn')
      classes.push('btn-primary')
    }

    return classes

  }

  private buildRxForm(config: HeliosSmartFormConfig) {

    if (!config) throw 'Helios: SmartForm requires a config object in order to work properly'

    for (const field of config.fields) {
      
      // Add control if not present
      if (!this.rxForm.get(field.name)) {
        this.rxForm.addControl(field.name, new FormControl(
          field.defaultValue ? field.defaultValue : null,
          field.validators ? field.validators : null
        ))
      }

    }
    
  }

  onRxFormSubmit(data: any) {

    // Invoque preSubmit hook
    if (this.config.preSubmit) {
      const preSubmitPayload = this.config.preSubmit(data)
      if (preSubmitPayload) data = preSubmitPayload
    }

    // Emit submit event
    this.heliosSubmit.next(data)

    // Invoque postSubmit hook
    if (this.config.postSubmit) this.config.postSubmit(data)
    
  }

  uploadFinished(url: string, name: string) {
    this.rxForm.patchValue({[name]: url})
  }

  heliosSelectChange(name: string, value: any) {
    this.rxForm.patchValue({ [name]: value })
  }

}
