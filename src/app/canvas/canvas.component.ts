import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  Injector,
  NgModule,
  OnInit,
  AfterViewInit
} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {InputBoxComponent} from '../input-box/input-box.component';
import {InputCircleComponent} from '../input-circle/input-circle.component';
import {Globals} from '../globals';
import swal from 'sweetalert2';
import {v4 as uuid} from 'uuid';
import {LineComponent} from '../line/line.component';

@NgModule({
  imports: [NgbModule]
})

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})

export class CanvasComponent implements OnInit, AfterViewInit {
  compList: any[] = this.globals.compList;
  connectors = this.globals.connectors;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private injector: Injector,
              private globals: Globals) {
  }

  ngOnInit() {
    document.getElementById('workspace').scrollTo(0, 178);


  }

  ngAfterViewInit() {
    if (this.compList.length > 0) {
      const compNum = this.compList.length;
      for (let i = 0; i < compNum; i++) {
        this.enterToDom(this.compList[i]);
      }
    }
    if (this.connectors.length > 0) {
      const myTO = setInterval(function () {
        let error = false;

        const conNum = this.connectors.length;
        console.log(this.connectors);
        for (let i = 0; i < conNum; i++) {
          const conn = this.connectors[i];
          try {
            this.drawLine(conn.node1, conn.node2, false, conn.id);
          } catch (e) {
            error = true;
          } finally {
            if (!error) {
              clearInterval(myTO);
            }
          }
        }
      }.bind(this), 100);

    }
  }


  enterToDom(comp) {
    const id = comp.id;
    switch (comp.type) {
      case 'Box': {
        const componentRef = this.componentFactoryResolver.resolveComponentFactory(InputBoxComponent).create(this.injector);
        componentRef.instance.cid = id;
        componentRef.instance.showcntrl = 'showControls' + id;
        componentRef.instance.cntrl = 'controls' + id;
        componentRef.instance.title = comp.title;
        componentRef.instance.body = comp.body;

        this.appRef.attachView(componentRef.hostView);
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        console.log('------------------ ' + componentRef.instance.cid);
        this.insertComponent(domElem, comp.x, comp.y);
        /*const comp = {name: 'Box', x: ev.screenX, y: ev.screenY};
        this.globals.list.push(comp);*/
        break;
      }
      case 'Circle': {
        const componentRef = this.componentFactoryResolver.resolveComponentFactory(InputCircleComponent).create(this.injector);
        componentRef.instance.cid = id;
        componentRef.instance.showcntrl = 'showControls' + id;
        componentRef.instance.cntrl = 'controls' + id;
        componentRef.instance.title = comp.title;
        componentRef.instance.body = comp.body;

        this.appRef.attachView(componentRef.hostView);
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        this.insertComponent(domElem, comp.x, comp.y);
        /*const comp = {name: 'Circle', x: ev.screenX, y: ev.screenY};
        this.globals.list.push(comp);*/
        break;
      }
    }
  }

  /**
   * @desc insert components to the canvas
   * @param domElem - type of component to be inserted
   * @param x - x coordinate of position
   * @param y - y coordinate of position
   */
  insertComponent(domElem, x, y) {
    /*console.log(domElem);*/
    /*const componentRef = this.componentFactoryResolver.resolveComponentFactory(component).create(this.injector);
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;*/
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
    const id = uuid();
    switch (data) {
      case 'boxModal': {
        const componentRef = this.componentFactoryResolver.resolveComponentFactory(InputBoxComponent).create(this.injector);
        componentRef.instance.cid = id;
        componentRef.instance.showcntrl = 'showControls' + id;
        componentRef.instance.cntrl = 'controls' + id;
        this.appRef.attachView(componentRef.hostView);
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        this.insertComponent(domElem, ev.screenX, ev.screenY);
        /*const comp = {name: 'Box', x: ev.screenX, y: ev.screenY};
        this.globals.list.push(comp);*/
        break;
      }
      case 'circleModal': {
        const componentRef = this.componentFactoryResolver.resolveComponentFactory(InputCircleComponent).create(this.injector);
        componentRef.instance.cid = id;
        componentRef.instance.showcntrl = 'showControls' + id;
        componentRef.instance.cntrl = 'controls' + id;
        this.appRef.attachView(componentRef.hostView);
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        this.insertComponent(domElem, ev.screenX, ev.screenY);
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
      if (document.getElementById(comp.id)) {
        const component = document.getElementById(comp.id);
        comp.x = component.getBoundingClientRect().left;
        comp.y = component.getBoundingClientRect().top + 65;
        comp.height = component.getBoundingClientRect().height;
        comp.width = component.getBoundingClientRect().width;
        comp.z = component.style.zIndex;
      }
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


  /**
   * @desc drawing line & updating lists
   * @param prevNode
   * @param curNode
   * @param newConnection
   * @param id
   */
  drawLine(prevNode, curNode, newConnection, id) {
    console.log(prevNode);
    console.log(curNode);


    let leftNode: string;
    let rightNode: string;
    const lineId = id;
    if (curNode !== prevNode) {
      // setting left and right nodes
      /*const prevNodeLeft = this.compList.find(i => i.id = prevNode);
      const curNodeLeft = this.compList.find(i => i.id = curNode);*/

      /*if (prevNodeLeft.x < curNodeLeft.x) {*/
      if (document.getElementById(prevNode).getBoundingClientRect().left < document.getElementById(curNode).getBoundingClientRect().left) {
        leftNode = prevNode;
        rightNode = curNode;
      } else {
        leftNode = curNode;
        rightNode = prevNode;
      }

      // generating line
      const componentRef = this.componentFactoryResolver.resolveComponentFactory(LineComponent).create(this.injector);
      /*const lineId = componentRef.instance.cid;*/
      componentRef.instance.cid = lineId;
      this.appRef.attachView(componentRef.hostView);
      const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;


      const leftNodeElm = this.compList.find(i => i.id === leftNode);
      const rightNodeElm = this.compList.find(i => i.id === rightNode);
      console.log('pre 1,2 ');
      console.log(leftNode);
      console.log(rightNode);

      console.log(leftNodeElm.id);
      console.log(rightNodeElm.id);
      console.dir(rightNodeElm);
      console.dir(leftNodeElm);
      const lineLeftX = leftNodeElm.x + (leftNodeElm.width / 2);
      const lineLeftY = /*leftNodeElm.y + leftNodeElm.height; */document.getElementById(leftNode).getBoundingClientRect().bottom - leftNodeElm.height / 2;
      const lineRightX = rightNodeElm.x + (rightNodeElm.width / 2);
      const lineRightY = /*rightNodeElm.y + rightNodeElm.height; */document.getElementById(rightNode).getBoundingClientRect().bottom - rightNodeElm.height / 2;

      // calculating line length and angle
      const xDist = lineRightX - lineLeftX;
      const yDist = lineRightY - lineLeftY;
      const hypo = Math.sqrt((Math.pow(xDist, 2) + Math.pow(yDist, 2)));
      const angleRad = Math.atan(yDist / xDist);
      const angleDeg = angleRad * 180 / Math.PI;

      domElem.style.position = 'absolute';
      const adjustment = angleDeg * 3;

      // setting line left position
      const scroll = this.getScroll();
      const workspaceX = document.getElementById('workspace').getBoundingClientRect().left;
      const workspaceY = document.getElementById('workspace').getBoundingClientRect().top;
      domElem.style.left = lineLeftX + scroll[0] - workspaceX - Math.abs(adjustment) + 'px';
      domElem.style.top = lineLeftY + scroll[1] - workspaceY + adjustment + 'px';

      // adding to canvas, set width and transformation
      const canvas = document.getElementById('canvas');
      canvas.appendChild(domElem);
      setTimeout(function () {
        if (document.getElementById(lineId)) {
          const newLine = document.getElementById(lineId);
          newLine.style.width = hypo + 'px';
          newLine.style.transform = 'rotate(' + angleDeg + 'deg)';
        }
      }, 10);

      // adding connector to components in the list
      const leftEle = this.compList.find(i => i.id === leftNode);
      const rightEle = this.compList.find(i => i.id === rightNode);

      if (newConnection) {
        leftEle.connectors.push(lineId);
        rightEle.connectors.push(lineId);
        leftEle.neighbors.push(rightNode);
        rightEle.neighbors.push(leftNode);
        const line = {id: lineId, node1: leftNode, node2: rightNode};
        this.connectors.push(line);
      }
    }
  }
}

