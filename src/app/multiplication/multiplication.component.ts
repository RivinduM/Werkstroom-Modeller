import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent implements OnInit {

  constructor() { }

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
