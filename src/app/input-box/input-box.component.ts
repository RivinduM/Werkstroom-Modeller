import {ApplicationRef, Component, ComponentFactoryResolver, EmbeddedViewRef, Injector, OnInit} from '@angular/core';
import {v4 as uuid} from 'uuid';
import swal from 'sweetalert2';
import {Globals} from '../globals';
import {LineComponent} from '../line/line.component';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css'],

})
export class InputBoxComponent implements OnInit {
  cid = uuid();
  showcntrl = 'showControls' + this.cid;
  cntrl = 'controls' + this.cid;
  title = '';
  body = '';
  compList: any[] = this.globals.compList;
  connectors = this.globals.connectors;
  dragStartX = null;
  dragStartY = null;
  private currentX: number;
  private currentY: number;

  constructor(private globals: Globals,
              private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private injector: Injector) {
    const swal = require('sweetalert2');
  }

  /**
   * @desc set modal header and body text on initialization
   */
  ngOnInit() {
    swal.setDefaults({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2'],
      allowOutsideClick: false
    });

    const steps = [
      {
        title: 'Modal Header',
        text: 'Enter title of the box'
      },
      'Modal Body'
    ];

    swal.queue(steps).then((result) => {
      swal.resetDefaults();
      if (result.value) {
        this.title = result.value[0];
        this.body = result.value[1];
        this.addToList();
      }
    });
  }

  /**
   * @desc add component to component list
   */
  addToList() {
    const comp = {
      id: this.cid, type: 'Box', x: 250, y: 60, title: this.title,
      body: this.body, height: 200, width: 250, z: 1000, connectors: []
    };
    this.compList.push(comp);
  }

  /**
   * @desc move component
   * @param ev
   */
  moveElement(ev) {
    ev.preventDefault();
    const element = document.getElementById(this.cid);
    element.style.position = 'absolute';
    if (isNaN(parseInt((element.style.left), 10))) {
      this.currentX = 0;
    } else {
      this.currentX = parseInt((element.style.left), 10);
    }
    if (isNaN(parseInt((element.style.top), 10))) {
      this.currentY = 0;
    } else {
      this.currentY = parseInt((element.style.top), 10);
    }
    const deltaX = this.currentX + Number(ev.screenX) - this.dragStartX;
    const deltaY = this.currentY + Number(ev.screenY) - this.dragStartY;
    this.dragStartX = null;
    this.dragStartY = null;
    element.style.left = deltaX + 'px';
    element.style.top = deltaY + 'px';
    const component = this.compList.find(i => i.id === this.cid);
    component.x = document.getElementById(this.cid).getBoundingClientRect().left;
    component.y = document.getElementById(this.cid).getBoundingClientRect().top;
    setTimeout(this.moveConnectors(), 10);
  }

  /**
   * @desc set data in drag event
   * @param ev
   */
  setData(ev) {
    ev.dataTransfer.setData('text', this.cid);
    this.dragStartX = ev.screenX;
    this.dragStartY = ev.screenY;
  }

  /**
   * @desc increase z index of component
   */
  bringToFront() {
    const currentZ = window.getComputedStyle(document.getElementById(this.cid), null).getPropertyValue('z-index');
    const zIndent = Number(currentZ) + 1;
    document.getElementById(this.cid).style.zIndex = zIndent + '';
  }

  /**
   * @desc decrease z index of component
   */
  sendToBack() {
    const currentZ = window.getComputedStyle(document.getElementById(this.cid), null).getPropertyValue('z-index');
    const zIndent = Number(currentZ) - 1;
    document.getElementById(this.cid).style.zIndex = zIndent + '';
  }

  /**
   *@desc show control icons
   */
  showControls() {
    document.getElementById(this.cntrl).style.display = 'block';
    document.getElementById(this.showcntrl).style.display = 'none';
  }

  /**
   * @desc hide control icons
   */
  hideControls() {
    document.getElementById(this.cntrl).style.display = 'none';
    document.getElementById(this.showcntrl).style.display = 'block';
  }

  /**
   * @desc confirm & delete component
   */
  delete() {
    swal({
      title: 'Are you sure?',
      type: 'info',
      showCancelButton: true,
      confirmButtonColor: '#1c0b6e',
      cancelButtonColor: '#3c3c3c',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        document.getElementById(this.cid).remove();
        const component = this.compList.find(i => i.id === this.cid);
        const index = this.compList.indexOf(component);
        this.compList.splice(index, 1);
      }
    });
  }

  /**
   * @desc edit modal header and body text
   */
  edit() {
    swal.setDefaults({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2'],
      allowOutsideClick: false
    });

    const steps = [
      {
        title: 'Modal Header',
        text: 'Enter title of the box',
        inputValue: this.title
      },
      {
        title: 'Modal Body',
        inputValue: this.body
      }
    ];

    swal.queue(steps).then((result) => {
      swal.resetDefaults();
      if (result.value) {
        this.title = result.value[0];
        this.body = result.value[1];
        const component = this.compList.find(i => i.id === this.cid);
        component.title = this.title;
        component.body = this.body;
      }
    });
  }

  /*update() {
    const element = document.getElementById(this.cid);
    const component = this.compList.find(i => i.id === this.cid);
    if (element.style.zIndex !== '') {
      component.z = element.style.zIndex;
    }
    if (element.style.height !== '') {
      component.height = element.style.height;
    }
    if (element.style.width !== '') {
      component.width = element.style.width;
    }
    if (element.style.left !== '') {
      component.x = element.style.left;
    }
    if (element.style.top !== '') {
      component.y = element.style.top;
    }

    //
  }*/

  /* setDrop(ev) {
     ev.dataTransfer.setData('text', ev.target.id);
   }*/

  /**
   * @desc allow drop of elements
   * @param ev
   */
  allowDrop(ev) {
    ev.preventDefault();
  }

  connect(ev){
    ev.preventDefault();
    const prevNode = ev.dataTransfer.getData('text');
    const curNode = this.cid;
    this.drawLine(prevNode, curNode);
  }

  /**
   * @desc connect components by line
   * @param ev
   */
  drawLine(prevNode, curNode) {
    /*ev.preventDefault();
    const prevNode = ev.dataTransfer.getData('text');
    const curNode = this.cid;*/
    let leftNode: string;
    let rightNode: string;

    if (curNode !== prevNode) {
      // setting left and right nodes
      if (document.getElementById(prevNode).getBoundingClientRect().left < document.getElementById(curNode).getBoundingClientRect().left) {
        leftNode = prevNode;
        rightNode = curNode;
      } else {
        leftNode = curNode;
        rightNode = prevNode;
      }

      // generating line
      const componentRef = this.componentFactoryResolver.resolveComponentFactory(LineComponent).create(this.injector);
      const lineId = componentRef.instance.cid;
      this.appRef.attachView(componentRef.hostView);
      const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      const line = {id: lineId, node1: leftNode, node2: rightNode};
      this.connectors.push(line);

      const leftNodeElm = this.compList.find(i => i.id === leftNode);
      const rightNodeElm = this.compList.find(i => i.id === rightNode);
      const lineLeftX = leftNodeElm.x + (leftNodeElm.width / 2);
      const lineLeftY = document.getElementById(leftNode).getBoundingClientRect().bottom - leftNodeElm.height / 2;
      const lineRightX = rightNodeElm.x + (rightNodeElm.width / 2);
      const lineRightY = document.getElementById(rightNode).getBoundingClientRect().bottom - rightNodeElm.height / 2;

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
         /* const left = lineLeftX + scroll[0] - workspaceX;
          const top = lineLeftY + scroll[1] - workspaceY;*/
        }
      }, 10);

      // adding connector to components in the list
      const leftEle = this.compList.find(i => i.id === leftNode);
      const rightEle = this.compList.find(i => i.id === rightNode);
      leftEle.connectors.push(lineId);
      rightEle.connectors.push(lineId);
    }
  }

  /**
   * move and reposition connected lines when components moved
   */
  moveConnectors() {
    const connections = this.compList.find(i => i.id === this.cid).connectors;
    for (const entry of connections) {
      // finding nodes
      let connectedNode;
      let leftNode: string;
      let rightNode: string;

      if (this.cid === this.connectors.find(i => i.id === entry).node1) {
        connectedNode = this.connectors.find(i => i.id === entry).node2;
      } else {
        connectedNode = this.connectors.find(i => i.id === entry).node1;
      }

      // getting left and right nodes
      if (document.getElementById(this.cid).getBoundingClientRect().left < document.getElementById(connectedNode).getBoundingClientRect().left) {
        leftNode = this.cid;
        rightNode = connectedNode;
      } else {
        leftNode = connectedNode;
        rightNode = this.cid;
      }

      /*const leftNodeElm = document.getElementById(leftNode);
      const rightNodeElm = document.getElementById(rightNode);

      const lineLeftX = leftNodeElm.getBoundingClientRect().left ;
      const lineLeftY = leftNodeElm.getBoundingClientRect().bottom - leftNodeElm.getBoundingClientRect().height;
      const lineRightX = rightNodeElm.getBoundingClientRect().left ;
      const lineRightY = rightNodeElm.getBoundingClientRect().bottom - leftNodeElm.getBoundingClientRect().height;*/
      const leftNodeElm = this.compList.find(i => i.id === leftNode);
      const rightNodeElm = this.compList.find(i => i.id === rightNode);
      const lineLeftX = leftNodeElm.x; /*+ (leftNodeElm.width / 2);*/
      const lineLeftY = document.getElementById(leftNode).getBoundingClientRect().bottom - leftNodeElm.height;
      const lineRightX = rightNodeElm.x; /* + (rightNodeElm.width / 2);*/
      const lineRightY = document.getElementById(rightNode).getBoundingClientRect().bottom - rightNodeElm.height;

      const xDist = lineRightX - lineLeftX;
      const yDist = lineRightY - lineLeftY;
      const hypo = Math.sqrt((Math.pow(xDist, 2) + Math.pow(yDist, 2)));
      const angleRad = Math.atan(yDist / xDist);
      const angleDeg = angleRad * 180 / Math.PI;

      document.getElementById(entry).style.position = 'absolute';
      /*const adjX = lineLeftX - 150;
      let adjY = lineLeftY;
      if (lineRightY <= lineLeftY) {
        adjY = lineLeftY;
      } else {
        adjY = lineLeftY;
      }*/

      const adjustment = angleDeg * 3;

      // setting line left position
      const scroll = this.getScroll();
      const workspaceX = document.getElementById('workspace').getBoundingClientRect().left;
      const workspaceY = document.getElementById('workspace').getBoundingClientRect().top;
      const paletteX = document.getElementById('palette').offsetLeft;
      const paletteY = document.getElementById('palette').offsetTop;
      const line = document.getElementById(entry);
      console.log('line id: ' + entry);
      const lineLeft = lineLeftX + scroll[0] - workspaceX - Math.abs(adjustment) - (paletteX * 3);
      const lineTop =  lineLeftY + scroll[1] - workspaceY + adjustment - paletteY;
      console.log(leftNodeElm.title + ' <= left , right => ' + rightNodeElm.title);
      /*console.log('lineLeftX : ' + lineLeftX);
      console.log('scrolll : ' + scroll[0]);
      console.log('workspa : ' + workspaceX);
      console.log('adj : ' + Math.abs(adjustment));*/
      console.log(angleDeg);
      console.log(lineLeftX + ' ======== ' + lineRightX);
      console.log('lineLeft: ' + lineLeft + ' lineTop: ' + lineTop);
      line.style.left = lineLeft + 'px';
      line.style.top = lineTop + 'px';
      line.style.width = hypo + 'px';
      line.style.transform = 'rotate(' + angleDeg + 'deg)';
    }
    console.log('-----------------------------------------------');
  }

  /*-----------no need -------------------*/
  showpos() {

    /*const conns = this.compList.find(i => i.id === this.cid).connectors;
    for (const entry of conns) {
      console.log(entry);
    }*/
    alert(document.getElementById(this.cid).getBoundingClientRect().bottom);
    alert(document.getElementById(this.cid).getBoundingClientRect().top);
    const lineLeftY = (document.getElementById(this.cid).style.height + document.getElementById(this.cid).getBoundingClientRect().bottom);
    alert(lineLeftY);
    /*const ele = document.getElementById(this.cid).getBoundingClientRect();
    alert(ele.left + ' '  + ele.right + '  '+ ele.top + ' ' + ele.bottom);*/
  }

  /**
   * @desc get amount of scroll of the workspace and returns scroll amount [x,y]
   * @returns {number[]}
   */
  getScroll() {
    const elmnt = document.getElementById('workspace');
    const x = elmnt.scrollLeft;
    const y = elmnt.scrollTop;
    const coordinates = [x, y];
    /*document.getElementById ('demo').innerHTML = 'Horizontally: ' + x + 'px<br>Vertically: ' + y + 'px';*/
    return coordinates;
  }

}
