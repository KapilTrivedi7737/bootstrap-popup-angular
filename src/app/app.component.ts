import { Component } from '@angular/core';

declare var $: any;
declare var popupFunctionObject: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';


  showPopUp() {
    popupFunctionObject.showPopUp();
  }

  closePopUp() {
    popupFunctionObject.closePopUp();
  }

}
