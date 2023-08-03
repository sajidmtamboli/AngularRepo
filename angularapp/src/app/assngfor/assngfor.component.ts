import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assngfor',
  templateUrl: './assngfor.component.html',
  styleUrls: ['./assngfor.component.css']
})
export class AssngforComponent implements OnInit {
  // country=['INDIA',"USA"];

  //  states =[ {country:'USA',name:'Alabama'},
  //           {country:'USA',name:'Alaska'}, 
  //           {country:'USA',name:'California'},
  //           {country:'USA',name:'Florida'},
  //            {country:'USA',name:'Pennsylvania'},
  //            {country:'INDIA',name:'Goa'},
  //           {country:'INDIA',name:'Maharashtra'},
  //           {country:'INDIA',name:'Haryana'},
  //            {country:'INDIA',name:'Jharkhand'},
  //            {country:'INDIA',name:'Himachal Pradesh'}
  //    ];

  //     selectedCountry:string;
  //     selectedstate:any;
  //     onCountryChange(){
  //      this.selectedstate=this.states.filter(state=>state.country===this.selectedCountry)
  //    }

     //first method for dropdown
  country=['INDIA',"USA"];

  states =[
    ['Maharashtra','Haryana', 'Himachal Pradesh', 'Jharkhand','Kerala','Goa'],
    ['Alabama','Alaska','California','Florida','Georgia','Pennsylvania']
  ];


  selectedCountry:string;
  selectedstate : string;

  getstates(){
    const getdata=this.country.indexOf(this.selectedCountry);
    return this.states[getdata]
  }
  constructor() { }

  ngOnInit() {
  }

  }

