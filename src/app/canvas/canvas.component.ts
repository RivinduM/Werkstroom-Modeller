import {
  Component, OnInit, NgModule, ComponentFactoryResolver, ApplicationRef, Injector,
  EmbeddedViewRef, IterableDiffers, DoCheck, ChangeDetectionStrategy
} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {InputBoxComponent} from '../input-box/input-box.component';
import {InputCircleComponent} from '../input-circle/input-circle.component';
import {Globals} from '../globals';
import swal from "sweetalert2";

@NgModule({
  imports: [NgbModule],

})
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  list: any[] = this.globals.list;

  /*  differ: any;
    private count: number;*/
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private injector: Injector,
              private globals: Globals/*,
    differs: IterableDiffers*/) {/*
    this.differ = differs.find([]).create(null);
    this.count = 0;*/
  }

  /*ngDoCheck() {
    const change = this.differ.diff(this.list);
    /!*console.log(change);*!/
    if (change) {
      console.log("list change");
      for (const item of this.list) {
        if(this.differ.diff(item)){
          console.log('item changed'+item.name+' '+item.x);
        }
        /!*console.log(item.name + '  ' + item.x);
        this.dynamicInsert(item.name, item.x, item.y);*!/
      }
    }
  }*/
  ngOnInit() {
    /* this.line();*/
  }


  insertComponent(component, x, y) {
    const componentRef = this.componentFactoryResolver.resolveComponentFactory(component).create(this.injector);
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    domElem.style.position = 'absolute';
    domElem.style.left = x - 180.25 + 'px'; // 250   + 'px'
    domElem.style.top = y - 173 + 'px'; // 60
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

  remove(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    /*alert('Remove ' + data);*/
    const parent = document.getElementById('canvas');
    const child = document.getElementById(data);
    parent.removeChild(child);
  }

  showList() {
    for (const entry of this.list) {
      alert(entry.name);
    }
    /*alert(this.globals.list);*/
  }

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

  /*dynamicInsert(type, x, y){
    console.log('inside dyn comp' + this.count);
    this.count++;
    switch (type) {
      case 'Box': {
        this.insertComponent(InputBoxComponent, x, y );
        break;
      }
      case 'Circle': {
        this.insertComponent(InputCircleComponent, x, y );
        break;
      }
    }
  }*/
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

