import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assdatabinding',
  templateUrl: './assdatabinding.component.html',
  styleUrls: ['./assdatabinding.component.css']
})
export class AssdatabindingComponent implements OnInit {

  name : string = 'Codemind';
  isDisabled : false;
 

  constructor() { }

  ngOnInit() {
  }
  SaveData(){
    this.name = '';
}
  

}
