import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgendaService, DayService, DragAndDropService, MonthService, RecurrenceEditorAllModule, ResizeService, ScheduleAllModule, TimelineMonthService, TimelineViewsService, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';
import { CheckBoxAllModule, ButtonAllModule, SwitchAllModule } from '@syncfusion/ej2-angular-buttons';
import { DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule, DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { NumericTextBoxAllModule, TextBoxAllModule, MaskedTextBoxModule, UploaderAllModule } from '@syncfusion/ej2-angular-inputs';
import { ToolbarAllModule, ContextMenuAllModule, TreeViewModule, AppBarModule } from '@syncfusion/ej2-angular-navigations';
import { ToastAllModule } from '@syncfusion/ej2-angular-notifications';
import { DropDownButtonAllModule } from '@syncfusion/ej2-angular-splitbuttons';
import { EjsScheduleComponent } from './components/ejs-schedule/ejs-schedule.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ChipListModule } from '@syncfusion/ej2-angular-buttons';


@NgModule({
 imports:      [ CommonModule, ScheduleAllModule, RecurrenceEditorAllModule,   NumericTextBoxAllModule, TextBoxAllModule, DatePickerAllModule, 
    TimePickerAllModule, DateTimePickerAllModule, CheckBoxAllModule,   ToolbarAllModule, DropDownListAllModule,DateRangePickerModule,
     ContextMenuAllModule, MaskedTextBoxModule, UploaderAllModule, MultiSelectAllModule,RouterModule,ChipListModule,
      TreeViewModule, ButtonAllModule, DropDownButtonAllModule, SwitchAllModule,  ToastAllModule, AppBarModule ],
 declarations: [  EjsScheduleComponent,FooterComponent,NavbarComponent,SidebarComponent],
  providers: [DayService, WeekService, WorkWeekService, MonthService,TimelineViewsService ,ResizeService ,TimelineMonthService ,DragAndDropService , AgendaService],
 exports:      [ CommonModule, FormsModule ,EjsScheduleComponent,FooterComponent,NavbarComponent,SidebarComponent]
})
export class SharedModule { }