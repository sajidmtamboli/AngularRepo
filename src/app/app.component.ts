import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp batch7';
  data : string = 'Angular Batch7';
  array : any = ["Java","React","Angular","Softwaretesting","Paython","Datascience"];

// step 5
  getDataFromChild(value) {
    console.log(value);   
   }
}
