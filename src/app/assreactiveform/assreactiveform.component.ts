import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assreactiveform',
  templateUrl: './assreactiveform.component.html',
  styleUrls: ['./assreactiveform.component.css']
})
export class AssreactiveformComponent implements OnInit {
  myForm: FormGroup;
  isFormSubmitted : boolean = false;
  
  constructor() {
   this.createForm()
   }

  ngOnInit() {
    
  }
  createForm(){
    this.myForm = new FormGroup ({
      'projectDetails': new FormGroup({
        'projectName': new FormControl('', [Validators.required,]),
        'email' : new FormControl(null,[Validators.required, Validators.email]),
        'project_Status': new FormControl(),
        'projectStatus' : new FormControl()
      })     
  })
}
OnSubmit(){
  console.log('Submit method called', this.myForm);
  if (this.myForm.valid) {
    this.isFormSubmitted = true;
    
    console.log('Submit method called', this.myForm);
    console.log('Forms Value', this.myForm.value);
  }
}
datta(control: FormControl) : Promise<any> | Observable<any> {
  const myPromise = new Promise<any>((resolve, reject) => {
    setTimeout( () => {
      if (control.value === 'test') {
        resolve({'namesIsNotAllowed': true})
      } else {
        resolve(null)
      }
    }, 3000)
  })
  return myPromise;
}

}
