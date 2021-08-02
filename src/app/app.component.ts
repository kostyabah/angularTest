import { Component, Injectable } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms'

function reqImageType(type: string){
  return (cntr: FormControl) => {
    let {src, name}:{src: string, name: any} = cntr.value;
    let index :number = ["png", "jpeg", "jpg"].indexOf(
      name.toLowerCase().split(".")[1]
    )
    return (index > -1) ? {
      reqImageType: true
    } : null

  }

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  src: string = ""
  isOccur: boolean = false
  imageGroup: FormGroup;
  constructor(private fb: FormBuilder){
    this.imageGroup = fb.group({
      animation: [true,[Validators.required]],
      //inputFile: [null, [Validators.required]],
      info: [null, [Validators.required, reqImageType]]
    })
    this.imageGroup.valueChanges.subscribe(
      (value) => {
        console.log("subscribe", value);
        this.isOccur = false;
      }
    )
  };
/*
  get valueForm(){
    return this.imageGroup.value
  }
*/
  get allowAnimation(){
    return {
      transition5s: this.isOccur
    }
  }
  get position(){
    let typeAnimation = this.imageGroup.value.animation;
    let direction = this.isOccur ? !typeAnimation : typeAnimation;
    let directionName = direction ? "0%" : "calc(100% - 300px)";
    return {
      left: `${directionName}`
    }
  }

  get style(){
    return {
      ...this.position,
      ['background-image']: `url(${this.src})`
    }
  }
  observe(){
    //console.log(this.imageGroup)

    this.src = this.imageGroup.value.info.src
    console.log(this.src)
  }
  onSubmit(){
    console.log(this.imageGroup)
    this.isOccur = true;
  }

}

