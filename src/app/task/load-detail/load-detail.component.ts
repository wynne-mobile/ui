import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { SampleData } from 'src/app/shared/data/sample-data';
import { MenuWarrantyComponent } from '../menu-warranty/menu-warranty.component';
import { MenuHistoryComponent } from '../menu-history/menu-history.component';
import { MenuFileComponent } from '../menu-file/menu-file.component';
import { MenuCertificateComponent } from '../menu-certificate/menu-certificate.component';
import { MenuPartComponent } from '../menu-part/menu-part.component';
import { MenuLaborComponent } from '../menu-labor/menu-labor.component';
import { MenuSmartFormComponent } from '../menu-smart-form/menu-smart-form.component';
import { MenuStepsComponent } from '../menu-steps/menu-steps.component';
import { ModdalNewLoadComponent } from '../moddal-new-load/moddal-new-load.component';
import { MenuAssignMechanicComponent } from '../menu-assign-mechanic/menu-assign-mechanic.component';

@Component({
  selector: 'app-load-detail',
  templateUrl: './load-detail.component.html',
  styleUrls: ['./load-detail.component.sass']
})

export class LoadDetailComponent implements OnInit {
  taskList: Array<any> = SampleData.TaskListCollection;
  taskId = '';
  loadId = '';
  task;
  load;
  menuList = [
    { name: 'New Load', icon: 'playlist_add' },
    { name: 'Attachments', icon: 'attach_file' },
    { name: 'Parts', icon: 'apps' },
    { name: 'Warranty', icon: 'new_releases' },
    { name: 'History', icon: 'multiline_chart' },
    { name: 'Certificates', icon: 'star_border' },
    { name: 'Labor', icon: 'transfer_within_a_station' },
    { name: 'Assign Mechanic', icon: 'transfer_within_a_station' },
    { name: 'Smartform', icon: 'featured_play_list' },
    { name: 'Steps', icon: 'crop_free' }
  ];
  isMenuListFullScreen = false;
  constructor(private route: ActivatedRoute, public matDialog: MatDialog) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.taskId = params['taskId'];
      this.loadId = params['loadId'];
      this.task = this.taskList.filter(f => f.id == this.taskId)[0];
      this.load = this.task.loads.filter(f => f.id == this.loadId)[0];
      console.log('this.load', this.load);
    });
    // for quick develop
    this.openMenu('Warranty');
  }

  openMenu = function (menu) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-menu-" + menu;
    dialogConfig.width = "100%";
    dialogConfig.height = "80%";
    dialogConfig.data = menu;
    let modalDialog = null;
    switch (menu) {
      case 'New Load':
        modalDialog = this.matDialog.open(ModdalNewLoadComponent, dialogConfig);
        break;
      case 'Warranty':
        modalDialog = this.matDialog.open(MenuWarrantyComponent, dialogConfig);
        break;
      case 'History':
        modalDialog = this.matDialog.open(MenuHistoryComponent, dialogConfig);
        break;
      case 'Attachments':
        modalDialog = this.matDialog.open(MenuFileComponent, dialogConfig);
        break;
      case 'Certificates':
        modalDialog = this.matDialog.open(MenuCertificateComponent, dialogConfig);
        break;
      case 'Parts':
        modalDialog = this.matDialog.open(MenuPartComponent, dialogConfig);
        break;
      case 'Labor':
        modalDialog = this.matDialog.open(MenuLaborComponent, dialogConfig);
        break;
      case 'Assign Mechanic':
        modalDialog = this.matDialog.open(MenuAssignMechanicComponent, dialogConfig);
        break;
      case 'SmartForms':
        modalDialog = this.matDialog.open(MenuSmartFormComponent, dialogConfig);
        break;
      case 'Steps':
        modalDialog = this.matDialog.open(MenuStepsComponent, dialogConfig);
        break;
    }
  }

}
