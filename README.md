<p align="center"><img width=100% src="https://imgur.com/sR6fQhU.png"></p>

![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Basic Overview

Helios is a Angular library for building powerful and customizable forms with just a Typescript object. Helios provides support for generics, multiple CSS frameworks, HTTP requests and many more features

## Features

- **Typescipt Generics Support** - Don't lose control over your data types
- **Graphical customization** - Modify almost any aspect of how looks your form. From CSS framework suppor to embbed custom elements on every input field
- **Based on Angular Reactive Forms** - Never worry again to use the long syntax of Angular Reactive Forms, Helios handle it for you
- **Wide variety of Hooks** - You need to transform your data before or after a submit? No problem
- **Everything is Reactive** - From hooks to submiting
- **Integrate seamlessly with @epsidev/dionisio** - Helios is one of the base for Dionisio and Prometheus libraries
- **Bootstrap 4 support** - Integrate Helios with Bootstrap 4 out of the box

## Installation
```bash
npm i @epsidev/helios --save
```
Then add
`HeliosModule` into your app.module.ts file
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeliosModule } from '@epsidev/helios';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeliosModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

## Usage
In your template do:
```html
<helios-form [config]="heliosConfig" (submit)="onSubmit" (error)="onError"></helios-form>
```

And in your .ts file create the heliosConfig object
```typescript
import { Component } from '@angular/core';
import { HeliosSmartFormConfig, HeliosError, HeliosSmartFormTypes } from '@epsidev/helios'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public heliosConfig: HeliosSmartFormConfig<LoginData> = {
    id: 'helios-test-form',
    fields: [
      {
        label: 'Email',
        placeholder: 'Enter your email',
        name: 'email',
        type: HeliosSmartFormTypes.Email,
        validators: [
          Validators.required,
          Validators.email,
        ]
      },
      {
        label: 'Email',
        placeholder: 'Enter your password',
        name: 'password',
        type: HeliosSmartFormTypes.Password,
        validators: [
          Validators.required 
        ]
      },
    ]
  }

  onSubmit(loginData: LoginData) {
    console.log(loginData)
  }

  onError(error: HeliosError) {
    console.log('LOGIN ERROR', error.description)
  }

}

interface LoginData {
  email: string
  password: string
}
```