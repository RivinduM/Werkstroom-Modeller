import {
  Component, OnInit, NgModule, ComponentFactoryResolver, ApplicationRef, Injector,
  EmbeddedViewRef, HostListener
} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {InputBoxComponent} from '../input-box/input-box.component';
import {InputCircleComponent} from '../input-circle/input-circle.component';
import {Globals} from '../globals';
import swal from 'sweetalert2';

@NgModule({
  imports: [NgbModule]
})

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})

export class CanvasComponent implements OnInit {
  list: any[] = this.globals.list;
  connectors = this.globals.connectors;
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private injector: Injector,
              private globals: Globals) {
  }
  ngOnInit() {
  }

  /**
   * @desc insert components to the canvas
   * @param component - type of component to be inserted
   * @param x - x coordinate of position
   * @param y - y coordinate of position
   */
  insertComponent(component, x, y) {
    const componentRef = this.componentFactoryResolver.resolveComponentFactory(component).create(this.injector);
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    domElem.style.position = 'absolute';
    domElem.style.left = x - 200 + 'px'; // 180.25   + 'px'
    domElem.style.top = y - 290 + 'px'; // 173
    const canvas = document.getElementById('canvas');
    canvas.appendChild(domElem);
  }

  /**
   * @desc prevent default drops
   * @param ev - drop event
   */
  allowDrop(ev) {
    ev.preventDefault();
  }

  /**
   * @desc setting data of drag event
   * @param ev
   */
  drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);

  }

  /**
   * @desc sense drop of toolbox elements & call function to insert component
   * @param ev
   */
  drop(ev) {
    /*alert(document.getElementById('workspace').scrollTop + ' , ' +  document.getElementById('canvas').scrollHeight )*/
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    switch (data) {
      case 'boxModal': {
        this.insertComponent(InputBoxComponent, ev.screenX, ev.screenY);
        /*const comp = {name: 'Box', x: ev.screenX, y: ev.screenY};
        this.globals.list.push(comp);*/
        break;
      }
      case 'circleModal': {
        this.insertComponent(InputCircleComponent, ev.screenX, ev.screenY);
        /*const comp = {name: 'Circle', x: ev.screenX, y: ev.screenY};
        this.globals.list.push(comp);*/
        break;
      }
    }

  }

  /*//////////////////no need*/
  remove(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    const parent = document.getElementById('canvas');
    const child = document.getElementById(data);
    parent.removeChild(child);
  }

  /*///////////////////////////no need*/
  showList() {
    for (const entry of this.list) {
      alert(entry.name);
    }
    /*alert(this.globals.list);*/
  }

  /**
   * confirm delete of components and update list
   * @param element - element to be deleted
   */
  delete(element) {
    swal({
      title: 'Are you sure?',
      type: 'info',
      showCancelButton: true,
      confirmButtonColor: '#1c0b6e',
      cancelButtonColor: '#3c3c3c',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        document.getElementById(element).remove();
        const component = this.list.find(i => i.id === element);
        const index = this.list.indexOf(component);
        this.list.splice(index, 1);
      }
    });
  }

  /*//////////////////////no need*/
  showPos(ev) {
    alert(ev.screenX + ' ' + ev.screenY);
    alert(document.getElementById('canvas').scrollLeft);

    /*alert(document.getElementById('canvas').scrollWidth)
    alert(document.getElementById('canvas').scrollLeft)
    */
  }

  /*//////////////////////no need*/
  connPos(id) {
    alert('left  ' + document.getElementById(id).getBoundingClientRect().left + 'top ' + document.getElementById(id).getBoundingClientRect().top);
  }

  /*//////////////////////no need*/
  setWidth(id) {
    document.getElementById(id).style.width = 1000 + 'px';
  }

  scrolled(ev){
    alert('scrolled');
  }
  scollPos() {
    const div = document.getElementById('canvas').scrollTop;
    alert(div);
  }

}

