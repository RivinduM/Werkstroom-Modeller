import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ToolboxComponent} from './toolbox/toolbox.component';
import {DragAndDropModule} from 'angular-draggable-droppable';
import {DndModule} from 'ng2-dnd';
import { InputBoxComponent } from './input-box/input-box.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolboxComponent,
    InputBoxComponent
  ],
  imports: [
    BrowserModule,
    DragAndDropModule.forRoot(),
    DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent, ToolboxComponent],
  exports: [BrowserModule, DndModule]
})
export class AppModule { }
