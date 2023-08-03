import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() dataInput : string;
  // step 1
@Output() foodEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    console.log('Data coming from parent', this.dataInput);
    
  }
  // step 2
  addToFood() {
    this.foodEvent.emit('Banana');
  }
}
