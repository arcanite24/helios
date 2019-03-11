import { InjectionToken } from '@angular/core';

export const HELIOS_CONFIG = new InjectionToken<HeliosConfig>('HELIOS_CONFIG')

export interface HeliosConfig {

  // File Uploader
  fileUploaderHandler: (file: File) => Promise<string | null>

}
