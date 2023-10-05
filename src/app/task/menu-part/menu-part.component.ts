import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-part',
  templateUrl: './menu-part.component.html',
  styleUrls: ['./menu-part.component.sass']
})
export class MenuPartComponent implements OnInit {
  onDisplay: boolean = true;

  ngOnInit() {

  }

  switchDisplay() { 
    this.onDisplay = !this.onDisplay;
  }

}
