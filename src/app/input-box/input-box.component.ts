import {
  Component, OnInit, AfterContentInit, DoCheck, EmbeddedViewRef, Injector, ApplicationRef,
  ComponentFactoryResolver
} from '@angular/core';
import {v4 as uuid} from 'uuid';
import swal from 'sweetalert2';
import {Globals} from '../globals';
import {LineComponent} from '../line/line.component';
import {el} from '@angular/platform-browser/testing/src/browser_util'; ////////////

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
  list: any[] = this.globals.list;
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
        /*swal({
          title: 'All done!',
          html:
          'Your answers: <pre>' +
          JSON.stringify(result.value) +
          '</pre>',
          confirmButtonText: 'Lovely!'
        });*/
        this.addToList();
      }
    });


  }

  addToList() {
    const comp = {id: this.cid, type: 'Box', x: 250, y: 60, title: this.title,
      body: this.body, height: '200px', width: '250px', z: 1000, connectors: []};
    this.list.push(comp);
  }

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
    const component = this.list.find(i => i.id === this.cid);
    component.x = element.style.left;
    component.y = element.style.top;

    this.moveConnectors();
  }

  setData(ev) {
    ev.dataTransfer.setData('text', this.cid);
    this.dragStartX = ev.screenX;
    this.dragStartY = ev.screenY;
  }

  bringToFront() {
    const currentZ = window.getComputedStyle(document.getElementById(this.cid), null).getPropertyValue('z-index');
    const zIndent = Number(currentZ) + 1;
    document.getElementById(this.cid).style.zIndex = zIndent + '';
  }

  sendToBack() {
    const currentZ = window.getComputedStyle(document.getElementById(this.cid), null).getPropertyValue('z-index');
    const zIndent = Number(currentZ) - 1;
    document.getElementById(this.cid).style.zIndex = zIndent + '';
  }

  showControls() {
    document.getElementById(this.cntrl).style.display = 'block';
    document.getElementById(this.showcntrl).style.display = 'none';
  }


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
        const component = this.list.find(i => i.id === this.cid);
        const index = this.list.indexOf(component);
        this.list.splice(index, 1);
      }
    });
  }

  hideControls() {
    document.getElementById(this.cntrl).style.display = 'none';
    document.getElementById(this.showcntrl).style.display = 'block';
  }

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
        const component = this.list.find(i => i.id === this.cid);
        component.title = this.title;
        component.body = this.body;
      }
    });
  }

  update() {
    const element = document.getElementById(this.cid);
    const component = this.list.find(i => i.id === this.cid);
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
  }

  /* setDrop(ev) {
     ev.dataTransfer.setData('text', ev.target.id);
   }*/

  allowDrop(ev) {
    ev.preventDefault();
  }

  connect(ev) {
    ev.preventDefault();
    const prevNode = ev.dataTransfer.getData('text');
    const curNode = this.cid;
    let leftNode: string;
    let rightNode: string;

    if (curNode !== prevNode) {
      if (document.getElementById(prevNode).getBoundingClientRect().left < document.getElementById(curNode).getBoundingClientRect().left ) {
        leftNode = prevNode;
        rightNode = curNode;
      } else {
        leftNode = curNode;
        rightNode = prevNode;
      }
      const leftNodeElm = document.getElementById(leftNode);
      const rightNodeElm = document.getElementById(rightNode);

      const componentRef = this.componentFactoryResolver.resolveComponentFactory(LineComponent).create(this.injector);
      const lineId = componentRef.instance.cid;
      this.appRef.attachView(componentRef.hostView);
      const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      const line = {id: lineId, node1: leftNode, node2: rightNode};
      this.connectors.push(line);

      /*domElem.style.position = 'absolute';*/
      const lineLeftX = leftNodeElm.getBoundingClientRect().left + (leftNodeElm.getBoundingClientRect().width / 2);
      const lineLeftY = (leftNodeElm.getBoundingClientRect().top + leftNodeElm.getBoundingClientRect().bottom ) / 2;
      const lineRightX = rightNodeElm.getBoundingClientRect().left + (rightNodeElm.getBoundingClientRect().width / 2);
      const lineRightY = (rightNodeElm.getBoundingClientRect().top + rightNodeElm.getBoundingClientRect().bottom) / 2;

      const xDist = lineRightX - lineLeftX;
      const yDist = lineRightY - lineLeftY;
      const hypo = Math.sqrt((Math.pow(xDist, 2 ) + Math.pow(yDist, 2)));
      alert(lineLeftX + ' , ' + lineLeftY + ' + ' + lineRightX + ' , ' + lineRightY);
      const angleRad = Math.atan(yDist / xDist );
      const angleDeg = angleRad * 180 / Math.PI;

      domElem.style.position = 'relative';
      const adjX = lineLeftX - 150;
      let adjY = lineLeftY;
      if (lineRightY <= lineLeftY ) {
        adjY = lineLeftY - 170;
      } else{
        alert('left is ');
        adjY = lineLeftY + 50;
      }
      domElem.style.left = adjX + 'px';
      domElem.style.top = adjY + 'px';

      const canvas = document.getElementById('canvas');
      canvas.appendChild(domElem);
      setTimeout(function () {
        if (document.getElementById(lineId)){
          const newLine = document.getElementById(lineId);
          newLine.style.width = /*Math.abs(xDist)*/ hypo + 'px' ;
          newLine.style.transform = 'rotate(' + angleDeg + 'deg)';
        }
      }, 10);

      const leftEle = this.list.find(i => i.id === leftNode);
      const rightEle = this.list.find(i => i.id === rightNode);
      leftEle.connectors.push(lineId);
      rightEle.connectors.push(lineId);
    }
  }


  moveConnectors(){
    const connections = this.list.find(i => i.id === this.cid).connectors;
    for (const entry of connections) {
      /*console.log(entry);*/
      let connectedNode;
      let leftNode: string;
      let rightNode: string;
      if (this.cid === this.connectors.find(i => i.id === entry).node1){
        connectedNode = this.connectors.find(i => i.id === entry).node2;
      } else {
        connectedNode = this.connectors.find(i => i.id === entry).node1;
      }

      if (document.getElementById(this.cid).getBoundingClientRect().left < document.getElementById(connectedNode).getBoundingClientRect().left ) {
        leftNode = this.cid;
        rightNode = connectedNode;
      } else {
        leftNode = connectedNode;
        rightNode = this.cid;
      }
      const leftNodeElm = document.getElementById(leftNode);
      const rightNodeElm = document.getElementById(rightNode);

      const lineLeftX = leftNodeElm.getBoundingClientRect().left + (leftNodeElm.getBoundingClientRect().width / 2);
      const lineLeftY = (leftNodeElm.getBoundingClientRect().top + leftNodeElm.getBoundingClientRect().bottom ) / 2;
      const lineRightX = rightNodeElm.getBoundingClientRect().left + (rightNodeElm.getBoundingClientRect().width / 2);
      const lineRightY = (rightNodeElm.getBoundingClientRect().top + rightNodeElm.getBoundingClientRect().bottom) / 2;

      const xDist = lineRightX - lineLeftX;
      const yDist = lineRightY - lineLeftY;
      const hypo = Math.sqrt((Math.pow(xDist, 2 ) + Math.pow(yDist, 2)));
      const angleRad = Math.atan(yDist / xDist );
      const angleDeg = angleRad * 180 / Math.PI;

      document.getElementById(entry).style.position = 'relative';
      const adjX = lineLeftX - 150;
      let adjY = lineLeftY;
      if (lineRightY <= lineLeftY ) {
        adjY = lineLeftY - 170;
      } else {
        adjY = lineLeftY + 50;
      }
      const line = document.getElementById(entry);
      line.style.left = adjX + 'px';
      line.style.top = adjY + 'px';
      line.style.width = /*Math.abs(xDist)*/ hypo + 'px' ;
      line.style.transform = 'rotate(' + angleDeg + 'deg)';
    }
  }

  showpos(){
    /*const conns = this.list.find(i => i.id === this.cid).connectors;
    for (const entry of conns) {
      console.log(entry);
    }*/
    /*alert(document.getElementById(this.cid).parentElement.scrollLeft)*/
    /*const ele = document.getElementById(this.cid).getBoundingClientRect();
    alert(ele.left + ' '  + ele.right + '  '+ ele.top + ' ' + ele.bottom);*/
  }
}
