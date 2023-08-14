import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SampleData } from 'src/app/shared/data/sample-data';

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
    { name: 'Warranty', icon: 'new_releases'},
    { name: 'History', icon: 'multiline_chart'},
    { name: 'File', icon: 'attach_file'},
    { name: 'Certificates', icon: 'star_border'},
    { name: 'Parts', icon: 'apps'},
    { name: 'Labor', icon: 'transfer_within_a_station'},
    { name: 'Smartform', icon: 'featured_play_list'},
    { name: 'Steps', icon: 'crop_free'} 
  ];
  isMenuListFullScreen = false;
  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.taskId = params['taskId'];
      this.loadId = params['loadId'];
      this.task = this.taskList.filter(f=>f.id == this.taskId)[0];
      this.load = this.task.loads.filter(f=>f.id == this.loadId)[0];
      console.log('this.load', this.load); 
    });
  }
}
