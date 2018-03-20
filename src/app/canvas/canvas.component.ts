import {ApplicationRef, Component, ComponentFactoryResolver, EmbeddedViewRef, Injector, NgModule, OnInit} from '@angular/core';
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
  compList: any[] = this.globals.compList;
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
    const scroll = this.getScroll();
    const workspaceX = document.getElementById('workspace').getBoundingClientRect().left;
    const workspaceY = document.getElementById('workspace').getBoundingClientRect().top;
    const xPos = x + scroll[0] - workspaceX - 41;
    const yPos = y + scroll[1] - workspaceY - 105;
    domElem.style.left = xPos + 'px';
    domElem.style.top = yPos + 'px';
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
        const component = this.compList.find(i => i.id === element);
        const index = this.compList.indexOf(component);
        this.compList.splice(index, 1);
      }
    });
  }

  /**
   * @desc update compoent array details
   */
  updateList() {
    for (const comp of this.compList) {
      const component = document.getElementById(comp.id);
      comp.x = component.getBoundingClientRect().left;
      comp.y = component.getBoundingClientRect().top + 65;
      comp.height = component.getBoundingClientRect().height;
      comp.width = component.getBoundingClientRect().width;
      comp.z = component.style.zIndex;
    }
  }

  /**
   * @desc get amount of scroll of the workspace and returns scroll amount [x,y]
   * @returns {number[]}
   */
  getScroll() {
    const elmnt = document.getElementById('workspace');
    const x = elmnt.scrollLeft;
    const y = elmnt.scrollTop;
    return [x, y];
  }

  /*//////////////////////no need*/
  showPos(ev) {
    alert(ev.screenX + ' ' + ev.screenY);
    /*alert(document.getElementById('canvas').scrollLeft);
*/
    /*alert(document.getElementById('canvas').scrollWidth)
    alert(document.getElementById('canvas').scrollLeft)
    */
  }
}

