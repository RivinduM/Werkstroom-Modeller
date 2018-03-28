import { Component, OnInit } from '@angular/core';
import {v4 as uuid} from 'uuid';
import swal from "sweetalert2";
import {Globals} from '../globals';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
 /* cid = uuid();*/
  cid: string;
  connectors = this.globals.connectors;
  compList: any[] = this.globals.compList;
  /*x1 = '0';
  x2 = '100';
  y1 = '0';
  y2 = '100';*/
  constructor(private globals: Globals) {
  }
  ngOnInit() {
    /*alert('bounding client data');
    alert(this.x1);
    alert(this.y1);
    alert(this.x2);
    alert(this.y2);*/
  }

  show(id){
    alert('inside line');
    alert(document.getElementById(id).getBoundingClientRect().left);
    alert(document.getElementById(id).getBoundingClientRect().top);
    alert(document.getElementById(id).getBoundingClientRect().right);
    alert(document.getElementById(id).getBoundingClientRect().bottom);
  }

  delete(){
    swal({
      title: 'Delete the connection?',
      type: 'info',
      showCancelButton: true,
      confirmButtonColor: '#1c0b6e',
      cancelButtonColor: '#3c3c3c',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        const line = this.connectors.find(i => i.id === this.cid);

        const node1 = line.node1;
        const n1Connectors = this.compList.find(i => i.id === node1).connectors;
        const n1Line = n1Connectors.find(i => i.id === this.cid);
        const n1LineIndex = n1Connectors.indexOf(n1Line);
        n1Connectors.splice(n1LineIndex, 1);

        const node2 = line.node2;
        const n2Connectors = this.compList.find(i => i.id === node2).connectors;
        const n2Line = n2Connectors.find(i => i.id === this.cid);
        const n2LineIndex = n2Connectors.indexOf(n2Line);
        n2Connectors.splice(n2LineIndex, 1);

        const index = this.connectors.indexOf(line);
        this.connectors.splice(index, 1);
        document.getElementById(this.cid).remove();
      }
    });
  }

  /*setValues(x1, y1, x2, y2) {
    document.getElementById(this.cid).style.left = x1;
    document.getElementById(this.cid).style.top = y1;
    document.getElementById(this.cid).style.right = x2;
    document.getElementById(this.cid).style.bottom = y2;
 /!*   this.x1 = x1/!*.toString()*!/;
    this.x2 = x2/!*.toString()*!/;
    this.y1 = y1/!*.toString()*!/;
    this.y2 = y2/!*.toString()*!/;*!/
  }*/

  /*my(){
    alert("hemmm");
    this.y2 = '200';
    this.x2 = '150';


  }*/
}
