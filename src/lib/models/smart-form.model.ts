import { Observable } from 'rxjs';

export interface HeliosSmartFormConfig<T = any> {

  id: string
  fields: HeliosSmartFormField[]

  // Debug
  showFormValue?: boolean

  // Hooks
  preSubmit?: (model: T) => Partial<T> | void
  postSubmit?: (model: T) => void

  // Graphical Customization
  stylingBootstrap?: boolean
  stylingBulma?: boolean

  submitButtonText?: string
  hideSubmitButton?: boolean

}

export interface HeliosSmartFormField<T = any> {

  // Required info
  name: string
  type: HeliosSmartFormTypes

  // Graphical Customization
  label?: string
  placeholder?: string

  // Validation and default values
  validators?: any[]
  defaultValue?: any

  // Info for TextArea type
  cols?: number
  rows?: number

  // Select Type
  selectDataSource?: Observable<T[]>
  selectOptionField?: (option: T) => any | string
  selectOptionLabel?: ((option: T) => string) | string
  selectedValue?: (option: T) => boolean

  // Checkbox Type
  checkboxLabel?: string
  checkboxSelected?: (field: HeliosSmartFormField) => boolean

}

export interface HeliosError {
  id: string
  description: string
}

export enum HeliosSmartFormTypes {
  Text = 'text',
  Number = 'number',
  Password = 'password',
  Email = 'email',
  Color = 'color',
  Date = 'date',
  DatetimeLocal = 'datetime-local',
  Month = 'month',
  Range = 'range',
  Search = 'search',
  Telephone = 'tel',
  Time = 'time',
  Url = 'url',
  Week = 'week',

  TextArea = 'textarea',
  File = 'file',
  Select = 'select',
  Checkbox = 'checkbox',
}