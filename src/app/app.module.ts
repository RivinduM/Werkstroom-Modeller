import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ToolboxComponent} from './toolbox/toolbox.component';
import {DragAndDropModule} from 'angular-draggable-droppable';


@NgModule({
  declarations: [
    AppComponent,
    ToolboxComponent
  ],
  imports: [
    BrowserModule,
    DragAndDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent, ToolboxComponent]
})
export class AppModule { }
