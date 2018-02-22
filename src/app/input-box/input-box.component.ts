import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css'],

})
export class InputBoxComponent implements OnInit {
  cid = uuid();

  constructor() {
  }

  ngOnInit() {
  }

  moveElement(ev) {
    /*alert(this.cid)*/
    ev.preventDefault();

    const element = document.getElementById(this.cid);
    element.style.position = 'absolute';
    element.style.left = ev.screenX - 460 + 'px';
    element.style.top = ev.screenY - 270 + 'px';
  }

  setData(ev){
    ev.dataTransfer.setData('text', this.cid);
  }


}
