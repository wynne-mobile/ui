import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout-container',
  templateUrl: './main-layout-container.component.html',
  styleUrls: ['./main-layout-container.component.sass']
})
export class MainLayoutContainerComponent {
  isExpanded = false;
  controlSlideMenu = function(){
    this.isExpanded = ! this.isExpanded;
  };
}
