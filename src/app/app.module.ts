import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {CanvasComponent} from './canvas/canvas.component';

import { InputBoxComponent } from './input-box/input-box.component';
import { InputCircleComponent } from './input-circle/input-circle.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Globals} from './globals';
import { LineComponent } from './line/line.component';


@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    InputBoxComponent,
    InputCircleComponent,
    LineComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  entryComponents: [InputBoxComponent, InputCircleComponent],
  providers: [ Globals ],
  bootstrap: [AppComponent, CanvasComponent],
  exports: [BrowserModule]
})
export class AppModule { }
