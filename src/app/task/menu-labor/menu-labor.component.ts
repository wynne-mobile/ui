import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-labor',
  templateUrl: './menu-labor.component.html',
  styleUrls: ['./menu-labor.component.sass']
})
export class MenuLaborComponent implements OnInit {

  onDisplayMode = true; 
  labors = [
    {
      "Id": "6535ef3e638594cdeca883af",
      "LogDateTime": "2018-09-22T13:29:28.030Z",
      "WorkOrderSegment": "WO588450",
      "MechanicName": "John Doe",
      "DateOfIntervention": "2017-10-16T22:24:16.208Z",
      "LaborCode": "10K Oil Change",
      "LaborHour": 7
    },
    {
      "Id": "6535ef3e44f2edad73c4c4cb",
      "LogDateTime": "2012-09-03T00:58:31.612Z",
      "WorkOrderSegment": "WO503105",
      "MechanicName": "John Doe",
      "DateOfIntervention": "2019-07-01T21:56:15.735Z",
      "LaborCode": "10K Oil Change",
      "LaborHour": 4
    },
    {
      "Id": "6535ef3e42f7e858e361a566",
      "LogDateTime": "2021-08-23T06:21:43.944Z",
      "WorkOrderSegment": "WO686308",
      "MechanicName": "John Doe",
      "DateOfIntervention": "2017-02-07T12:18:53.958Z",
      "LaborCode": "Regular Quater Checkup",
      "LaborHour": 6
    },
    {
      "Id": "6535ef3e88294348f9d917c1",
      "LogDateTime": "2021-09-29T11:31:38.225Z",
      "WorkOrderSegment": "WO881797",
      "MechanicName": "John Doe",
      "DateOfIntervention": "2018-09-09T21:57:24.617Z",
      "LaborCode": "10K Oil Change",
      "LaborHour": 5
    },
    {
      "Id": "6535ef3e564e8f336e27f430",
      "LogDateTime": "2015-10-23T09:33:12.531Z",
      "WorkOrderSegment": "WO281798",
      "MechanicName": "John Doe",
      "DateOfIntervention": "2020-09-28T05:07:45.382Z",
      "LaborCode": "Regular Quater Checkup",
      "LaborHour": 6
    },
    {
      "Id": "6535ef3e4fa0c6ed90bf2e7e",
      "LogDateTime": "2021-03-08T02:38:43.737Z",
      "WorkOrderSegment": "WO127384",
      "MechanicName": "John Doe",
      "DateOfIntervention": "2017-07-16T15:15:16.829Z",
      "LaborCode": "General Mantenance",
      "LaborHour": 2
    }
  ];
  ngOnInit() {
  
  } 

}