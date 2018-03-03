import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';
import swal from 'sweetalert2';

@Component({
  selector: 'app-input-circle',
  templateUrl: './input-circle.component.html',
  styleUrls: ['./input-circle.component.css']
})
export class InputCircleComponent implements OnInit {
  cid = uuid();
  showcntrl = 'showControls' + this.cid;
  cntrl = 'controls' + this.cid;
  title = '';
  body = '';
  constructor() {
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
      }
    });

  }

  moveElement(ev) {
    ev.preventDefault();
    const element = document.getElementById(this.cid);
    element.style.position = 'absolute';
    element.style.left = ev.screenX - 418 + 'px';
    element.style.top = ev.screenY - 228 + 'px';
  }

  setData(ev) {
    ev.dataTransfer.setData('text', this.cid);
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
      }
    });
  }

  hideControls() {
    document.getElementById(this.cntrl).style.display = 'none';
    document.getElementById(this.showcntrl).style.display = 'block';
  }

  edit(){
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
      }
    });
  }
}
