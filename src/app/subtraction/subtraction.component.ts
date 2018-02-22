import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent implements OnInit {
  cid = uuid();
  constructor() { }

  ngOnInit() {
  }
  moveElement(ev) {
    ev.preventDefault();
    const element = document.getElementById(this.cid);
    /*alert(element.id);*/
    element.style.position = 'absolute';
    element.style.left = ev.screenX - 450 + 'px';
    element.style.top = ev.screenY - 300 + 'px';
  }

  setData(ev){
    ev.dataTransfer.setData('text', this.cid);
  }
}
