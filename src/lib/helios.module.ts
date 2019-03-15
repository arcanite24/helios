import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SmartFormComponent } from './shared/smart-form/smart-form.component';
import { HeliosConfig, HELIOS_CONFIG } from './models/helios.models';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HeliosService } from './helios.service';
import { SmartFormFileUploaderComponent } from './smart-form-file-uploader/smart-form-file-uploader.component';
import { SmartFormSelectComponent } from './shared/smart-form-select/smart-form-select.component';
import { SmartFormCheckboxComponent } from './shared/smart-form-checkbox/smart-form-checkbox.component';

@NgModule({
  declarations: [
    SmartFormComponent,
    SmartFormFileUploaderComponent,
    SmartFormSelectComponent,
    SmartFormCheckboxComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    SmartFormComponent
  ],
  providers: [
    HeliosService
  ]
})
export class HeliosModule {

  static forRoot(config?: HeliosConfig): ModuleWithProviders {
    return {
      ngModule: HeliosModule,
      providers: [
        {
          provide: HELIOS_CONFIG,
          useValue: config 
        }
      ]
    }
  }

}