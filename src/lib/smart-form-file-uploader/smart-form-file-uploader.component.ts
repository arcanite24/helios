import { Component, OnInit, Inject, Output, EventEmitter, Input } from '@angular/core';
import { HELIOS_CONFIG, HeliosConfig } from '../models/helios.models';
import { fileUploaderText } from '../models/smart-form.defaults';
import { HeliosSmartFormConfig } from '../models/smart-form.model';

@Component({
  selector: 'helios-smart-form-file-uploader',
  templateUrl: './smart-form-file-uploader.component.html',
  styleUrls: ['./smart-form-file-uploader.component.css']
})
export class SmartFormFileUploaderComponent implements OnInit {

  @Input() public formConfig: HeliosSmartFormConfig

  @Output() public onFinish: EventEmitter<string> = new EventEmitter()
  @Output() public onError: EventEmitter<any> = new EventEmitter()

  public buttonText: string = fileUploaderText.Initial
  public fileUploaderText = fileUploaderText

  constructor(
    @Inject(HELIOS_CONFIG) private config: HeliosConfig
  ) {
    if (!this.config.fileUploaderHandler) throw 'Helios: Please provide a fileUploadHandler function in module import'
    if (!(this.config.fileUploaderHandler instanceof Function)) throw 'Helios: Your fileUploadHandler return is not a Promise<string | null>'
  }

  ngOnInit() {
  }

  get uploadButtonClasses(): string[] {

    let classes = []

    if (this.formConfig.stylingBootstrap) classes.push(...['btn', 'btn-primary'])

    return classes

  }

  async onFileChange(files: FileList) {
    
    if (!files) return
    if (files.length <= 0) return
    if (!files.item(0)) return

    const file = files.item(0)
    this.buttonText = fileUploaderText.Uploading

    try {

      const url = await this.config.fileUploaderHandler(file)
      
      if (url) {
        this.buttonText = fileUploaderText.Finished
        this.onFinish.next(url)
      } else {
        this.buttonText = fileUploaderText.Error
        this.onError.next(new Error('Helios: Something happened while uploading your file, check your fileUploaderHandler in module .forRoot() configuration'))
      }

    } catch (error) {
      this.buttonText = fileUploaderText.Error
      this.onError.next(error)
    }

  }

}
