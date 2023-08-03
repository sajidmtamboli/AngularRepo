import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simpleformass',
  templateUrl: './simpleformass.component.html',
  styleUrls: ['./simpleformass.component.css']
})
export class SimpleformassComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form: NgForm) {
    console.log('form submitted', form);
    let Firstname = form.value.inputEmail4
    console.log('First name is Sajid');
    let Lastname = form.value.inputPassword4
    console.log('Last name is Tamboli');
    let Address = form.value.inputAddress
    console.log('Entered addres is', Address);
    let Mobile = form.value.inputNumber
    console.log('Enterd Mobile no is',Mobile); 
  }
}
