import { Component, OnInit } from '@angular/core';
import { SampleData } from '../shared/data/sample-data';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoadDetailDialogComponent } from './load-detail-dialog/load-detail-dialog.component';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {
  taskList: Array<any> = SampleData.TaskListCollection;
  taskListOnRoute: Array<any> = [];
  taskListOnSite: Array<any> = [];
  taskListCompleted: Array<any> = [];

  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {
    this.taskListOnRoute = this.taskList.filter(f => { return f.order.status == 'OnRoute'; });
    this.taskListOnSite = this.taskList.filter(f => { return f.order.status == 'OnSite'; });
    this.taskListCompleted = this.taskList.filter(f => { return f.order.status == 'Completed'; });
  }

  onTaskSelected = function (id: string) {
    this.taskList.forEach(t => {
      if (t.id === id) {
        t.isOpen = !t.isOpen;
      }
      else {
        t.isOpen = false;
      }
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(LoadDetailDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
