import { Injectable, Inject } from '@angular/core';
import { HELIOS_CONFIG, HeliosConfig } from './models/helios.models';

@Injectable({
  providedIn: 'root'
})
export class HeliosService {

  constructor(
    @Inject(HELIOS_CONFIG) private config: HeliosConfig
  ) {
    console.log(this.config)
  }
}
