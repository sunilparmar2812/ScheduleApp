import { Component } from '@angular/core';
import { Location } from '@angular/common'
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {

  constructor(public location :Location){

  }

  goBackClick(){
      this.location.back();
  }
}
