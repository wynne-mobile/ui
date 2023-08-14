import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalEnRouteComponent } from '../modal-en-route/modal-en-route.component';

@Component({
  selector: 'app-task-item-list',
  templateUrl: './task-item-list.component.html',
  styleUrls: ['./task-item-list.component.sass']
})
export class TaskItemListComponent {
  @Input() task;

  constructor(public matDialog: MatDialog) {

  }


  onloadSelected = function (id) {
    this.task.isOpen = !this.task.isOpen;
  }
  openEnRoute = function (task) { 
    const dialogConfig = new MatDialogConfig(); 
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-en-route"; 
    dialogConfig.width = "100%";
    dialogConfig.data = task; 
    const modalDialog = this.matDialog.open(ModalEnRouteComponent, dialogConfig);
  }
}
