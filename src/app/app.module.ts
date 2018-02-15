import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ToolboxComponent} from './toolbox/toolbox.component';

import { InputBoxComponent } from './input-box/input-box.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolboxComponent,
    InputBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [InputBoxComponent],
  providers: [],
  bootstrap: [AppComponent, ToolboxComponent],
  exports: [BrowserModule]
})
export class AppModule { }
