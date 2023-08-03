import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributdir',
  templateUrl: './attributdir.component.html',
  styleUrls: ['./attributdir.component.css']
})
export class AttributdirComponent implements OnInit {
  colorVal = 'blue';
  peoples: any[] = [
    {'name': 'Jack', 'country': 'UK'},
    {'name': 'Sumit', 'country': 'USA'},
    {'name': 'Anup', 'country': 'HK'},
    {'name': 'Tom', 'country': 'UK'},
    {'name': 'Surya', 'country': 'USA'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
