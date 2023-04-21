import { AfterViewChecked, AfterViewInit, Component, Inject, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, GroupModel, EventSettingsModel, WorkHoursModel, ScheduleComponent, View, TimelineViewsService, ResizeService, DragAndDropService, TimelineMonthService, CellTemplateArgs, getWeekNumber, getWeekLastDate, EventRenderedArgs, CellClickEventArgs, ResourceDetails, ActionEventArgs } from '@syncfusion/ej2-angular-schedule';
import { Internationalization, addClass, closest, extend, remove } from '@syncfusion/ej2-base';
import { DragAndDropEventArgs } from '@syncfusion/ej2-navigations';
import { resourceData, timelineResourceData } from 'src/app/dataSource/data';

@Component({
  selector: 'app-ejs-schedule',
  templateUrl: './ejs-schedule.component.html',
  styleUrls: ['./ejs-schedule.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [TimelineViewsService, TimelineMonthService, AgendaService, ResizeService, DragAndDropService]
})
export class EjsScheduleComponent implements AfterViewInit {

  constructor() {

  }

  public fields: Object = { text: 'Name', value: 'Id' };
  public currentViewData: Object[] = [{ Id: 'TimelineWeek', Name: 'Week' }];
  public scheduleView: View = 'TimelineWeek';
  public allowDragAndDrop = true;
  public selectedDate: Date = new Date(2023, 3, 22);
  public workDays: number[] = [1, 2, 3, 4, 5];
  public workHours: WorkHoursModel = { start: '08:00', end: '18:00' };
  public allowMultiple: boolean = false;
  public instance: Internationalization = new Internationalization();
  public isTreeItemDropped = false;
  public draggedItemId = '';
  public dayInterval = 3;
  public minDate: Date = new Date(2023, 3, 22);
  public maxDate: Date = new Date(2023, 3, 25 );

  @ViewChild('schedule', { static: false }) public scheduleObj: ScheduleComponent;
  @ViewChild('treeObj') public treeObj: TreeViewComponent;


  ngAfterViewInit() {
    this.InstantiateExpr();
  }

  InstantiateExpr() {
    this.scheduleObj.timeScale.interval = 60;
    this.scheduleObj.timeScale.slotCount = 1;
    this.scheduleObj.timeScale.enable = true;
    this.scheduleObj.dataBind();
  }

  public getMonthDetails(value: CellTemplateArgs): string {
    return this.instance.formatDate((value as CellTemplateArgs).date, { skeleton: 'yMMMM' });
  }

  public getWeekDetails(value: CellTemplateArgs): string {
    return 'Week ' + getWeekNumber(getWeekLastDate((value as CellTemplateArgs).date, 0));
  }

  public getDateDetails(value: CellTemplateArgs): string {
    return this.instance.formatDate((value as CellTemplateArgs).date, { skeleton: 'MMMEd' });
  }

  onChange(event) {
    this.scheduleView = event.value;
    this.scheduleObj.refresh();
  }

  public group: GroupModel = {
    resources: ['Locations', 'Persons']
  };

  public projectDataSource: Record<string, any>[] = [
    { text: 'PROJECT 1', id: 1, color: '#cb6bb2' },
    { text: 'PROJECT 2', id: 2, color: '#56ca85' },
  ];

  public categoryDataSource: Record<string, any>[] = [
    { text: 'Nancy', id: 1, groupId: 1, color: '#df5286' },
    { text: 'Steven', id: 2, groupId: 1, color: '#7fa900' },
    { text: 'Robert', id: 3, groupId: 2, color: '#ea7a57' },
    { text: 'Smith', id: 4, groupId: 2, color: '#5978ee' },
    { text: 'Michael', id: 5, groupId: 3, color: '#df5286' },
    { text: 'Root', id: 6, groupId: 3, color: '#00bdae' }
  ];

  public locationsDataSource: Record<string, any>[] = [
    { Id: 1, LocationName: 'Los Angeles', color: '#cb6bb2' },
    { Id: 2, LocationName: 'San Diego', color: '#56ca85' },
  ];

  public PersonDataSource: Record<string, any>[] = [
    {
      Id: 1,
      PersonName: 'Alex Anderson',
      ShortName: 'AA',
      groupId: 1,
      color: '#df5286'
    },
    {
      Id: 2,
      PersonName: 'John Doe',
      ShortName: 'JD',
      groupId: 1,
      color: '#7fa900'
    },
    {
      Id: 3,
      PersonName: 'John Vincent',
      ShortName: 'JV',
      groupId: 1, color: '#ea7a57'
    },
    {
      Id: 4,
      PersonName: 'Annie Leonhart',
      ShortName: 'AL',
      groupId: 2,
      color: '#5978ee'
    },
    {
      Id: 5,
      PersonName: 'Levu Ackerman',
      ShortName: 'LA',
      groupId: 2,
      color: '#df5286'
    },

  ]

  public JobList: Record<string, any>[] = [
    {
      Id: 1,
      Subject: 'JOB_9991',
      StartTime: new Date(2023, 3, 21, 8, 30),
      EndTime: new Date(2023, 3, 21, 12, 40),
      IsAllDay: false,
      LocationId: 1,
      PersonId: 1,
      Description: 'JOB_9991 JOB_9991 JOB_9991 ',
      color: '#5978ee',
      JobTypeClass: "Escalated",
      Priority: 'High',
      JobName : 'Warranty Repair'

    }, {
      Id: 2,
      Subject: 'JOB_9992',
      StartTime: new Date(2023, 3, 20, 9, 30),
      EndTime: new Date(2023, 3, 20, 16, 45),
      IsAllDay: false,
      LocationId: 1,
      PersonId: 2,
      Description: 'aaa ddddddddd JOB_9991 ',
      color: '#ea7a57',
      JobTypeClass: "onHold",
      Priority: 'Medium',
      JobName : 'Warranty Repair'
    },
    {
      Id: 3,
      Subject: 'JOB_9994',
      StartTime: new Date(2023, 3, 22, 14, 0),
      EndTime: new Date(2023, 3, 22, 17, 30),
      Description: 'aaa ddddddddd JOB_9991 ',
      IsAllDay: false,
      LocationId: 1,
      PersonId: 3, color: '#7fa900',
      JobTypeClass: "NotStarted",
      Priority: 'Low',
      JobName : 'Warranty Repair'
    },
    {
      Id: 3,
      Subject: 'JOB_9994',
      StartTime: new Date(2023, 3, 22, 8, 15),
      EndTime: new Date(2023, 3, 22, 16, 30),
      Description: 'aaa ddddddddd JOB_9991 ',
      IsAllDay: false,
      LocationId: 1,
      PersonId: 3, color: '#7fa900',
      JobTypeClass: "InProgress",
      Priority: 'High',
      JobName : 'Warranty Repair'
    },
    {
      Id: 4,
      Subject: 'JOB_9995',
      StartTime: new Date(2023, 3, 21, 9, 30),
      EndTime: new Date(2023, 3, 21, 10, 0),
      Description: 'aaa ddddddddd JOB_9991 ',
      IsAllDay: false,
      LocationId: 2,
      PersonId: 4,
      color: '#E0F0FD',
      JobTypeClass: "Escalated",
      Priority: 'High',
      JobName : 'Warranty Repair'
    }, {
      Id: 5,
      Subject: 'JOB_9996',
      StartTime: new Date(2023, 3, 21, 8, 30),
      EndTime: new Date(2023, 3, 21, 14, 20),
      Description: 'aaa ddddddddd JOB_9991 ',
      IsAllDay: false,
      LocationId: 2,
      PersonId: 5,
      color: '#ea7b57',
      JobTypeClass: "InProgress",
      Priority: 'Medium',
      JobName : 'Warranty Repair'
    }, {
      Id: 6,
      Subject: 'JOB_9997',
      StartTime: new Date(2023, 3, 22, 13, 0),
      EndTime: new Date(2023, 3, 22, 15, 30),
      Description: 'aaa ddddddddd JOB_9991 ',
      IsAllDay: false,
      LocationId: 2,
      PersonId: 5,
      color: '#7fa944',
      JobTypeClass: "NotStarted",
      Priority: 'Low',
      JobName : 'Warranty Repair'
    }
  ];

  public JobList2: Record<string, any>[] = [

  ];

  public waitingList: Record<string, any>[] = [
    {
      Id: 7,
      Subject: 'JOB_9995',
      StartTime: new Date(2023, 3, 21, 8, 30),
      EndTime: new Date(2023, 3, 21, 12, 40),
      IsAllDay: false,
      Description: 'JOB_9991 JOB_9991 JOB_9991 ',
      color: '#5978ee',
      JobTypeClass: "Escalated",
      Priority: 'High',
      JobName : 'Warranty Repair'
    },
    {
      Id: 8,
      Subject: 'JOB_99977',
      StartTime: new Date(2023, 3, 21, 8, 30),
      EndTime: new Date(2023, 3, 21, 12, 40),
      IsAllDay: false,
      Description: 'JOB_9991 JOB_9991 JOB_9994 ',
      color: '#5978ee',
      JobTypeClass: "OnHold",
      Priority: 'Medium',
      JobName : 'Warranty Repair'
    },
    {
      Id: 9,
      Subject: 'JOB_99100',
      StartTime: new Date(2023, 3, 21, 8, 30),
      EndTime: new Date(2023, 3, 21, 12, 40),
      IsAllDay: false,
      Description: 'JOB_9991 JOB_9991 JOB_9991 ',
      color: '#5978ee',
      JobTypeClass: "NotStarted",
      Priority: 'Low',
      JobName : 'Warranty Repair'
    },
    {
      Id: 10,
      Subject: 'JOB_999101',
      StartTime: new Date(2023, 3, 21, 8, 30),
      EndTime: new Date(2023, 3, 21, 12, 40),
      IsAllDay: false,
      Description: 'JOB_9991 JOB_9991 JOB_9994 ',
      color: '#5978ee',
      JobTypeClass: "InProgress",
      Priority: 'Medium',
      JobName : 'Warranty Repair'
    },
    {
      Id: 11,
      Subject: 'JOB_9995',
      StartTime: new Date(2023, 3, 21, 8, 30),
      EndTime: new Date(2023, 3, 21, 12, 40),
      IsAllDay: false,
      Description: 'JOB_9991 JOB_9991 JOB_9991 ',
      color: '#5978ee',
      JobTypeClass: "Escalated",
      Priority: 'High',
      JobName : 'Warranty Repair'
    },
    {
      Id: 12,
      Subject: 'JOB_999102',
      StartTime: new Date(2023, 3, 21, 8, 30),
      EndTime: new Date(2023, 3, 21, 12, 40),
      IsAllDay: false,
      Description: 'JOB_9991 JOB_9991 JOB_9994 ',
      color: '#5978ee',
      JobTypeClass: "InProgress",
      Priority: 'Medium',
      JobName : 'Warranty Repair'
    },
    {
      Id: 13,
      Subject: 'JOB_9995',
      StartTime: new Date(2023, 3, 21, 8, 30),
      EndTime: new Date(2023, 3, 21, 12, 40),
      IsAllDay: false,
      Description: 'JOB_9991 JOB_9991 JOB_9991 ',
      color: '#5978ee',
      JobTypeClass: "NotStarted",
      Priority: 'Low',
      JobName : 'Internal'
    },
    {
      Id: 14,
      Subject: 'JOB_99977',
      StartTime: new Date(2023, 3, 21, 8, 30),
      EndTime: new Date(2023, 3, 21, 12, 40),
      IsAllDay: false,
      Description: 'JOB_9991 JOB_9991 JOB_9994 ',
      color: '#5978ee',
      JobTypeClass: "DefaultState",
      Priority: 'High',
      JobName : 'Internal'
    }
  ];

  public eventSettings: EventSettingsModel = {
    dataSource: extend([], this.JobList.concat(this.JobList2), null, true) as Record<string, any>[]
  };

  public onTreeDrag(event: any): void {
    if (this.scheduleObj.isAdaptive) {
      const classElement: HTMLElement = this.scheduleObj.element.querySelector('.e-device-hover');
      if (classElement) {
        classElement.classList.remove('e-device-hover');
      }
      if (event.target.classList.contains('e-work-cells')) {
        addClass([event.target], 'e-device-hover');
      }
    }
  }


  public onActionBegin(event: ActionEventArgs): void {
    if (event.requestType === 'eventCreate' && this.isTreeItemDropped) {
      const treeViewData: Record<string, any>[] = this.treeObj.fields.dataSource as Record<string, any>[];
      const filteredPeople: Record<string, any>[] = treeViewData.filter((item: any) => item.Id !== parseInt(this.draggedItemId, 10));
      this.treeObj.fields.dataSource = filteredPeople;
      const elements: NodeListOf<HTMLElement> = document.querySelectorAll('.e-drag-item.treeview-external-drag');
      for (const element of [].slice.call(elements)) {
        remove(element);
      }
    }
  }

  public onItemSelecting(args: any): void {
    args.cancel = true;
  }

  public onTreeDragStop(event: DragAndDropEventArgs): void {
    const treeElement: Element = closest(event.target, '.e-treeview') as Element;
    const classElement: HTMLElement = this.scheduleObj.element.querySelector('.e-device-hover');
    if (classElement) {
      classElement.classList.remove('e-device-hover');
    }
    if (!treeElement) {
      event.cancel = true;
      const scheduleElement: Element = closest(event.target, '.e-content-wrap') as Element;
      if (scheduleElement) {
        const treeviewData: Record<string, any>[] = this.treeObj.fields.dataSource as Record<string, any>[];
        if (event.target.classList.contains('e-work-cells')) {
          const filteredData: Record<string, any>[] = treeviewData.filter((item: any) =>
            item.Id === parseInt(event.draggedNodeData['id'] as string, 10));
          const cellData: CellClickEventArgs = this.scheduleObj.getCellDetails(event.target);
          const resourceDetails: ResourceDetails = this.scheduleObj.getResourcesByIndex(cellData.groupIndex);
          const eventData: Record<string, any> = {
            Description: filteredData[0]['Description'],
            Subject: filteredData[0]['Subject'],
            StartTime: cellData.startTime,
            EndTime: cellData.endTime,
            IsAllDay: cellData.isAllDay,
            LocationId: resourceDetails.resourceData['groupId'],
            PersonId: resourceDetails.resourceData['Id'],
            color: '#7fa944',
            JobTypeClass: "NotStarted",
          };
          this.scheduleObj.openEditor(eventData, 'Add', true);
          this.isTreeItemDropped = true;
          this.draggedItemId = event.draggedNodeData['id'] as string;
        }
      }
    }
    document.body.classList.remove('e-disble-not-allowed');
  }
  public onTreeDragStart() {
    document.body.classList.add('e-disble-not-allowed');
  }


  public field: Record<string, any> = { dataSource: this.waitingList, id: 'Id', text: 'Name' };

  applyCategoryColor(args: EventRenderedArgs): void {
    let categoryColor: string = args.data['JobTypeClass'] as string;
    if (!categoryColor) {
      categoryColor = 'DefaultState';
    }
    args.element.classList.add(categoryColor);
  }

  public getPersonStatus(value: ResourceDetails): boolean {
    const resourceName: string = this.getPersonName(value);
    return !(resourceName === 'Los Angeles' || resourceName === 'San Diego');
  }


  public getPersonName(value: ResourceDetails): string {
    return (value as ResourceDetails).resourceData[(value as ResourceDetails).resource.textField] as string;
  }

  public  getPersonImageName(value: ResourceDetails): string {
    let xx = this.getPersonName(value).trimStart().trimEnd().replace(' ', '_');
    return xx;
  }

  getTimeString(value: Date): string {
    return this.instance.formatDate(value, { skeleton: 'hm' });
  }

  public getPriorityImageName(value: any){
    return value.Priority?value.Priority:'Low' ;
  }
}
