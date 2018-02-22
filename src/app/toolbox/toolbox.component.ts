import {
  Component, OnInit, NgModule, ComponentFactoryResolver, ApplicationRef, Injector,
  EmbeddedViewRef
} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {InputBoxComponent} from '../input-box/input-box.component';
import {MultiplicationComponent} from '../multiplication/multiplication.component';
import {AdditionComponent} from '../addition/addition.component';
import {SubtractionComponent} from '../subtraction/subtraction.component';

@NgModule({
  imports: [NgbModule],

})
@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }


  ngOnInit() {
  }



  insertComponent(component, x , y ) {
    const componentRef = this.componentFactoryResolver.resolveComponentFactory(component).create(this.injector);
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    domElem.style.position = 'absolute';
    domElem.style.left = x - 180.25   + 'px';
    domElem.style.top = y - 173 + 'px';
    const canvas = document.getElementById('canvas');
    canvas.appendChild(domElem);
  }


  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);

  }

  drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    switch(data) {
      case 'inputBox': {
        this.insertComponent(InputBoxComponent, ev.screenX, ev.screenY );
        break;
      }
      case 'times': {
        this.insertComponent(MultiplicationComponent, ev.screenX, ev.screenY );
        break;
      }
      case 'plus': {
        this.insertComponent(AdditionComponent, ev.screenX, ev.screenY );
        break;
      }
      case 'minus': {
        this.insertComponent(SubtractionComponent, ev.screenX, ev.screenY );
        break;
      }
    }

  }

  remove(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    /*alert('Remove ' + data);*/
    const parent = document.getElementById('canvas');
    const child = document.getElementById(data);
    parent.removeChild(child);


  }




}

