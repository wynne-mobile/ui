import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../load-detail-dialog/load-detail-dialog.component';

@Component({
  selector: 'app-modal-new-clock-time',
  templateUrl: './modal-new-clock-time.component.html',
  styleUrls: ['./modal-new-clock-time.component.sass']
})
export class ModalNewClockTimeComponent {
  order;
  constructor(
    public dialogRef: MatDialogRef<ModalNewClockTimeComponent>
    , @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.order = data; 
    console.log(this.order);
  }

  closeModal() {
    this.dialogRef.close();
  }
}
