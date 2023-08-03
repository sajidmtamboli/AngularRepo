import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assstructuraldirectives',
  templateUrl: './assstructuraldirectives.component.html',
  styleUrls: ['./assstructuraldirectives.component.css']
})
export class AssstructuraldirectivesComponent implements OnInit {

  topCourse : any [] = [
    { Course: 'Angular', eName:'Mr.Raj', Fees: '20,000'},
    { Course: 'React', eName:'Mr.Hari', Fees: '15,000'},
    { Course: 'Java', eName:'Mr.Akash', Fees: '18,000'},
  ]
  selectedCourse: string;
  showActions: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  getCourse(course){
    this.selectedCourse = course.target.value;
    console.log('ngswitch', course.target.value);
  }
}
