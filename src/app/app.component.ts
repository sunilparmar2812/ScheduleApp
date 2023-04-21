import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SchedulerApp';
  constructor(){
        
  }

  /**
   * readFile
   */
  public readFile() {
    
    // this.httpClient.get<any>("assets/employees.json").subscribe((data)=>
    // this.employeeData = data
    // )
  }
}
  