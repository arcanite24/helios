import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';

import { SmartFormComponent } from './shared/smart-form/smart-form.component';
import { HeliosConfig, HELIOS_CONFIG } from './models/helios.models';

@NgModule({
  declarations: [
    SmartFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SmartFormComponent
  ]
})
export class HeliosModule {

  static forRoot(config?: HeliosConfig) {
    return {
      ngModule: HeliosModule,
      provider: [
        { provide: HELIOS_CONFIG, useValue: config }
      ]
    }
  }

}