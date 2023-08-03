import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {
  username = '';
  defaultCourseValue = 'JavaScript';
  isFormSubmitted = false;
genders = [
  { id: '1', value: 'Male'},
  { id: '2', value: 'Female'},
  { id: '3', value: 'Other'},
]

  formData = {
    username: '',
     email: '',
     course: '',
     country: '',
     state: '',
     gender:''
    }
  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form: NgForm) {
    this.isFormSubmitted = true;
    console.log('form submitted', form);
    let email = form.value.email;
    console.log('Email is', email);
    let country = form.value.address.country;
    console.log('user input country name is', country)

    this.formData.username = form.value.username;
    this.formData.email = form.value.email;
    this.formData.course = form.value.course;
    this.formData.country = form.value.address.country;
    this.formData.state = form.value.address.state;
    this.formData.gender = form.value.gender;
    // reser the form controls
    // form.reset();
     form.resetForm({ username: 'username'});
     form.resetForm({ email: 'email'});
     form.resetForm({ course: 'course'});
     form.resetForm({ country: 'country'});
     form.resetForm({ state: 'state'});
     form.resetForm({ gender: 'gender'});

  }
}
