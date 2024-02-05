import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './task.routes';
import { MenuWarrantyComponent } from './menu-warranty/menu-warranty.component';
import { MenuCertificateComponent } from './menu-certificate/menu-certificate.component';
import { MenuPartComponent } from './menu-part/menu-part.component';
import { MenuLaborComponent } from './menu-labor/menu-labor.component';
import { MenuStepsComponent } from './menu-steps/menu-steps.component';
import { MenuSmartFormComponent } from './menu-smart-form/menu-smart-form.component';
import { MaterialModule } from '../material-module';
import { MenuFileComponent } from './menu-file/menu-file.component'; 
import { ModdalNewLoadComponent } from './moddal-new-load/moddal-new-load.component';
import { MenuAssignMechanicComponent } from './menu-assign-mechanic/menu-assign-mechanic.component';
import { ModalNewClockTimeComponent } from './modal-new-clock-time/modal-new-clock-time.component'; 



@NgModule({
  declarations: [
    MenuWarrantyComponent, 
    MenuCertificateComponent,
    MenuFileComponent, 
    MenuPartComponent, 
    MenuLaborComponent,
    MenuStepsComponent, 
    MenuSmartFormComponent, 
    ModdalNewLoadComponent, MenuAssignMechanicComponent, ModalNewClockTimeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class TaskModule { }
