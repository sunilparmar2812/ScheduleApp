import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
      constructor(){
        
      }

  public locations: Record<string, any>[] = [
        { Id: 1,LocationName: 'Los Angeles',  color: '#cb6bb2' },
        { Id: 2,LocationName: 'San Diego',  color: '#56ca85' },
      ];
  
      

  public PersonList : Record<string, any>[] = [
    {
      Id :1,
      PersonName: 'Alex Anderson',
      ShortName : 'AA', groupId: 1, color: '#df5286'
    },
    {
      Id :2,
      PersonName: 'John Doe',
      ShortName : 'JD', groupId: 1, color: '#7fa900'
    },
    {
      Id :3,
      PersonName: 'John Vincent',
      ShortName : 'JV', groupId: 1, color: '#ea7a57'
    },
    {
      Id :4,
      PersonName: 'Annie Leonhart',
      ShortName : 'AL', groupId: 2, color: '#5978ee'
    },
    {
      Id :5,
      PersonName: 'Levu Ackerman',
      ShortName : 'LA', groupId: 2, color: '#df5286'
    },
  
  ]

 
  public JobList: Record<string, any>[] = [
    {
      Id: 1,
      Subject: 'JOB',
      StartTime: new Date(2023, 3, 21, 8, 30),
      EndTime: new Date(2023, 3, 21, 11, 0),
      IsAllDay: false,
      LocationId: 1,
      PersonId: 2,      color:'#5978ee'
    }, {
      Id: 2,
      Subject: 'Requirement planning',
      StartTime: new Date(2023, 3, 21, 14, 30),
      EndTime: new Date(2023, 3, 21, 14, 45),
      IsAllDay: false,
      LocationId: 2,
      PersonId: 3, color: '#ea7a57'
    }, {
      Id: 3,
      Subject: 'Quality Analysis',
      StartTime: new Date(2023, 3, 22, 14, 0),
      EndTime: new Date(2023, 3, 22, 15, 30),
      IsAllDay: false,
      LocationId: 1,
      PersonId: 4, color: '#7fa900'
    }
  ];

  
  public JobList2: Record<string, any>[] = [
    {
      Id: 1,
      Subject: 'JOB 1',
      StartTime: new Date(2023, 3, 21, 8, 30),
      EndTime: new Date(2023, 3, 21, 11, 0),
      IsAllDay: false,
      LocationId: 2,
      PersonId: 1,      color:'#5945ee'
    }, {
      Id: 2,
      Subject: 'Requirement planning 1',
      StartTime: new Date(2023, 3, 21, 14, 30),
      EndTime: new Date(2023, 3, 21, 14, 45),
      IsAllDay: false,
      LocationId: 1,
      PersonId: 5, color: '#ea7b57'
    }, {
      Id: 3,
      Subject: 'Quality Analysis 1',
      StartTime: new Date(2023, 3, 22, 14, 0),
      EndTime: new Date(2023, 3, 22, 15, 30),
      IsAllDay: false,
      LocationId: 2,
      PersonId: 3, color: '#7fa944'
    }
  ];

  public allowMultiple = true;
}
