import { Component, HostListener, EventEmitter, Output} from '@angular/core';

import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'

@Component({
  selector: 'app-file-input',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileInputComponent,
      multi: true
    }
  ],
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.less']
})
export class FileInputComponent implements ControlValueAccessor {
  file: File | null = null;
  onChange: Function = ()=>{}
  constructor() { }
  @Output() afterChange = new EventEmitter();
  @HostListener("change", ["$event.target.files[0]"]) emitFiles(file: File){
    this.file = file
    console.log(this);
    this.onChange({name: file.name, src: this.src})
    this.afterChange.emit()
  }
  get src() :string{
    const { createObjectURL } = URL || (window as any).webkit.URL
    return createObjectURL(this.file);
  }

  writeValue(){

  }
  registerOnChange(clb: Function){ this.onChange = clb }
  registerOnTouched(){}


}
