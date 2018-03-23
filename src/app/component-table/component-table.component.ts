import {Component, OnInit} from '@angular/core';
import swal from 'sweetalert2';
import {Globals} from '../globals';

@Component({
  selector: 'app-component-table',
  templateUrl: './component-table.component.html',
  styleUrls: ['./component-table.component.css']
})
export class ComponentTableComponent implements OnInit {

  compList = this.globals.compList;
  connectors = this.globals.connectors;

  constructor(private globals: Globals) {
  }

  ngOnInit() {
  }

  /**
   * confirm delete of components and update list
   * @param element - element to be deleted
   */
  delete(element) {
    swal({
      title: 'Are you sure?',
      type: 'info',
      showCancelButton: true,
      confirmButtonColor: '#1c0b6e',
      cancelButtonColor: '#3c3c3c',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        const component = this.compList.find(i => i.id === element);

        for (const neighbor of component.neighbors) {
          const neighborEle = this.compList.find(i => i.id === neighbor).neighbors;
          const nIndex = neighborEle.indexOf(element);
          neighborEle.splice(nIndex, 1);
        }

        for (const line of component.connectors) {
          for (let i = 0; i < this.connectors.length; i++) {
            if (this.connectors[i].id === line) {
              this.connectors.splice(i, 1);
              break;
            }
          }
        }

        const index = this.compList.indexOf(component);
        this.compList.splice(index, 1);
      }
    });
  }

}
