import {
  Component, OnInit, NgModule, ComponentFactoryResolver, ApplicationRef, Injector,
  EmbeddedViewRef
} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {InputBoxComponent} from '../input-box/input-box.component';
import {InputCircleComponent} from '../input-circle/input-circle.component';


@NgModule({
  imports: [NgbModule],

})
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }


  ngOnInit() {
   /* this.line();*/
  }



  insertComponent(component, x , y ) {
    const componentRef = this.componentFactoryResolver.resolveComponentFactory(component).create(this.injector);
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    domElem.style.position = 'absolute';
    domElem.style.left = 250   + 'px'; // x-180.25
    domElem.style.top = 60 + 'px'; // y - 173
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
      case 'boxModal': {
        this.insertComponent(InputBoxComponent, ev.screenX, ev.screenY );
        break;
      }
      case 'circleModal': {
        this.insertComponent(InputCircleComponent, ev.screenX, ev.screenY );
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
/*
  line(){
    const boxCenterXOffset = 50;
    const boxCenterYOffset = 50;
    let x1 = document.getElementById('a').offsetLeft + boxCenterXOffset;
    let x2 = document.getElementById('b').offsetLeft + boxCenterXOffset;
    let y1 = document.getElementById('a').offsetTop  + boxCenterYOffset;
    let y2 = document.getElementById('b').offsetTop  + boxCenterYOffset;

    const hypotenuse = Math.sqrt((x1 - x2) * ( x1 - x2) + (y1 - y2) * (y1 - y2));
    const angle = Math.atan2((y1 - y2), (x1 - x2)) *  (180 / Math.PI);
    if ( angle >= 90 && angle < 180) {
      y1 = y1 - (y1 - y2);
    }
    if(angle > 0 && angle < 90){
      x1 = x1 - (x1 - x2);
      y1 = y1 - (y1 - y2);
    }
    if(angle <= 0 && angle > -90){
      x1 = x1 - (x1 - x2);
    }

    document.getElementById('line').style.position = 'relative' ;
    document.getElementById('line').style.left = x1 + 'px';


  }
*/



}

