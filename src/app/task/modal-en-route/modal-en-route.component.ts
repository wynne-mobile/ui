import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../load-detail-dialog/load-detail-dialog.component';

@Component({
  selector: 'app-modal-en-route',
  templateUrl: './modal-en-route.component.html',
  styleUrls: ['./modal-en-route.component.sass']
})
export class ModalEnRouteComponent { 
  loads;
  statuses = ["OnRoute", "OnSite", "Completed"];
  isLoadSameType = true;
  constructor(
    public dialogRef: MatDialogRef<ModalEnRouteComponent>
    , @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.loads = data['loads']; 
  }

  ngOnInit() {
    console.log(this.loads)
  }

  onStatusChange = function(load, evt) {
    console.log(load, evt);
    if(this.isLoadSameType) {
      this.loads.filter(f=>f.status === load.status).forEach(l => {
        l.status = evt;
      });
    }
  }

  closeModal() {
    this.dialogRef.close();
  }

}
