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



  insertBox() {
    const componentRef = this.componentFactoryResolver.resolveComponentFactory(InputBoxComponent).create(this.injector);
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.getElementById('canvas').appendChild(domElem);
  }




  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);

  }

  drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData('text');
    /*ev.target.appendChild(document.getElementById(data));*/
    alert(data);
    this.insertBox();
  }
}

