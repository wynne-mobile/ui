import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-steps',
  templateUrl: './menu-steps.component.html',
  styleUrls: ['./menu-steps.component.sass']
})
export class MenuStepsComponent implements OnInit {
  steps = [
    { Service: "Quaterly Aerial Inspection", Status: 1, IsOpen: false },
    { Service: "Perform Operational Check", Status: 2, IsOpen: false },
    { Service: "Change Filter", Status: 0, IsOpen: false },
    { Service: "General Maintainace Quarterly", Status: 0, IsOpen: false },
  ];
  ngOnInit(): void {

  }

  openStepDetail = function (s: any) {
    if (s.IsOpen) {
      s.IsOpen = false;
    }
    else {
      this.steps.forEach(e => {
        e.IsOpen = false;
      });
      s.IsOpen = true;
    }
  }

  changeStatus = function (s: any, status) {
    s.Status = status;
  }
}
