import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CanvasComponent} from './canvas/canvas.component';

import {InputBoxComponent} from './input-box/input-box.component';
import {InputCircleComponent} from './input-circle/input-circle.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Globals} from './globals';
import {LineComponent} from './line/line.component';
import {RouterModule} from '@angular/router';
import {HelpComponent} from './help/help.component';
import {ComponentTableComponent} from './component-table/component-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    InputBoxComponent,
    InputCircleComponent,
    LineComponent,
    HelpComponent,
    ComponentTableComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: CanvasComponent},
      {path: 'help', component: HelpComponent},
      {path: 'components', component: ComponentTableComponent}
    ])
  ],
  entryComponents: [InputBoxComponent, InputCircleComponent, LineComponent],
  providers: [Globals],
  bootstrap: [AppComponent/*, CanvasComponent*/],
  exports: [BrowserModule]
})
export class AppModule {
}
