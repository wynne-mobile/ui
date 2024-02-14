import { Component } from '@angular/core';
import { SampleData } from '../shared/data/sample-data';

@Component({
  selector: 'app-clock-time',
  templateUrl: './clock-time.component.html',
  styleUrls: ['./clock-time.component.sass']
})
export class ClockTimeComponent {
  taskList: Array<any> = SampleData.TaskListCollection;
  selectOrderNumber = null;

  onSelect = function (number) {
    this.selectOrderNumber = number;
  }
}
