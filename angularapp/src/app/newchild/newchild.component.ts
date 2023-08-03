import { Component, Input, OnInit } from '@angular/core';
import { inspect } from 'util';

@Component({
  selector: 'app-newchild',
  templateUrl: './newchild.component.html',
  styleUrls: ['./newchild.component.css']
})
export class NewchildComponent implements OnInit {
@Input() arrayInput : string
  constructor() { }

  ngOnInit() {
    console.log('Data coming from Parent', this.arrayInput);
    
  }

}
