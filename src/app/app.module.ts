import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FileInputComponent } from './file-input/file-input.component';
//import { SomploComponent } from './somplo/somplo.component';

@NgModule({
  declarations: [
    AppComponent,
    //ChildComponent,
    FileInputComponent,
    //SomploComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
