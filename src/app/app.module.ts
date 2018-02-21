import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ToolboxComponent} from './toolbox/toolbox.component';

import { InputBoxComponent } from './input-box/input-box.component';
import {NgDraggableWidgetModule} from 'ngx-draggable-widget';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { AdditionComponent } from './addition/addition.component';
import { SubtractionComponent } from './subtraction/subtraction.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolboxComponent,
    InputBoxComponent,
    MultiplicationComponent,
    AdditionComponent,
    SubtractionComponent
  ],
  imports: [
    BrowserModule,
    NgDraggableWidgetModule
  ],
  entryComponents: [InputBoxComponent, MultiplicationComponent, AdditionComponent, SubtractionComponent],
  providers: [],
  bootstrap: [AppComponent, ToolboxComponent],
  exports: [BrowserModule]
})
export class AppModule { }
