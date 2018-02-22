import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {
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
    element.style.top = ev.screenY - 270 + 'px';
  }

  setData(ev){
    ev.dataTransfer.setData('text', this.cid);
  }
}
