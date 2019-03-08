export interface HeliosSmartFormConfig<T = any> {
  id: string
  fields: HeliosSmartFormField[]
}

export interface HeliosSmartFormField {
  name: string
  type: HeliosSmartFormTypes
  label?: string
  placeholder?: string
  validators?: any[]
}

export interface HeliosError {
  id: string
  description: string
}

export enum HeliosSmartFormTypes {
  Text = 'text',
  Email = 'email',
  Password = 'password',
  Number = 'number',
  TextArea = 'textarea',
}