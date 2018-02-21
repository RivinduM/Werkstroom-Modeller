import {
  Component, OnInit, NgModule, ComponentFactoryResolver, ApplicationRef, Injector,
  EmbeddedViewRef
} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {InputBoxComponent} from '../input-box/input-box.component';


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



  insertBox(x , y ) {
    const componentRef = this.componentFactoryResolver.resolveComponentFactory(InputBoxComponent).create(this.injector);
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
    /*ev.target.appendChild(document.getElementById(data));*/
    /*//alert(data + ' dropped to the canvas');*/
    if (data === 'inputBox') {
      this.insertBox(ev.screenX, ev.screenY );
    }

  }

  remove(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    const element = document.getElementById(ev.target.id);
    const parent = document.getElementById('canvas');
    const child = document.getElementById(element.id);
    alert('remove component //yet to implement' );
    parent.removeChild(child);

  }



}

