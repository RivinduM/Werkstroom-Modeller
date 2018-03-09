import {Component, OnInit, AfterContentInit, DoCheck} from '@angular/core';
import {v4 as uuid} from 'uuid';
import swal from 'sweetalert2';
import {Globals} from '../globals'; ////////////

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

  constructor(private globals: Globals) {
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
    const comp = {id: this.cid, type: 'Box', x: 250, y: 60, title: this.title, body: this.body, height: null, width: null, z: null};
    this.list.push(comp);
  }

  moveElement(ev) {
    ev.preventDefault();
    const element = document.getElementById(this.cid);
    element.style.position = 'absolute';
    element.style.left = ev.screenX - 465 + 'px';
    element.style.top = ev.screenY - 274 + 'px';
    const component = this.list.find(i => i.id === this.cid);
    component.x = element.style.left;
    component.y = element.style.top;
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

  update(){
    const element = document.getElementById(this.cid);
    const component = this.list.find(i => i.id === this.cid);
    component.height = element.style.height;
    component.width = element.style.width;
    component.z = element.style.zIndex;
  }
}
