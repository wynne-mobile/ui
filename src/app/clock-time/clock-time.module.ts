import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './clock-time.routes'; 
import { MaterialModule } from '../material-module';



@NgModule({
  declarations: [ 
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class ClockTimeModule { }
