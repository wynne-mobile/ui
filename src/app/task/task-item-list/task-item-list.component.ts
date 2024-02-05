import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalEnRouteComponent } from '../modal-en-route/modal-en-route.component';
import { ModdalNewLoadComponent } from '../moddal-new-load/moddal-new-load.component';
import { ModalNewClockTimeComponent } from '../modal-new-clock-time/modal-new-clock-time.component';

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
  
  openNewLoad = function (task) { 
    const dialogConfig = new MatDialogConfig(); 
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-new-load"; 
    dialogConfig.width = "100%";
    dialogConfig.data = task; 
    const modalDialog = this.matDialog.open(ModdalNewLoadComponent, dialogConfig);
  }
  
  openEnRoute = function (task) { 
    const dialogConfig = new MatDialogConfig(); 
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-en-route"; 
    dialogConfig.width = "100%";
    dialogConfig.data = task; 
    const modalDialog = this.matDialog.open(ModalEnRouteComponent, dialogConfig);
  } 

  openClockTime = function (order) { 
    const dialogConfig = new MatDialogConfig(); 
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-new-load"; 
    dialogConfig.width = "100%";
    dialogConfig.data = order; 
    const modalDialog = this.matDialog.open(ModalNewClockTimeComponent, dialogConfig);
  }
}
