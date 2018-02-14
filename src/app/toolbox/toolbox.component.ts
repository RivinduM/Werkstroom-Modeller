import { Component, OnInit, NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {InputBoxComponent} from '../input-box/input-box.component';

@NgModule({
  imports: [NgbModule]
})
@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {

  }



  insertBox() {
    document.getElementById('canvas').appendChild('<app-input-box></app-input-box>');
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

