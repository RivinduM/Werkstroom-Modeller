import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css'],

})
export class InputBoxComponent implements OnInit {

  cid = 1;
  constructor() {  }

  ngOnInit() {
  }

  moveElement(ev) {
    ev.preventDefault();
    const element = document.getElementById(ev.target.id);
    /*alert(element.id);*/
    element.style.position = 'absolute';
    element.style.left = ev.screenX - 450 + 'px';
    element.style.top = ev.screenY - 270 + 'px';
  }

}
