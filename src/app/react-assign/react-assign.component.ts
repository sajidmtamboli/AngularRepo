import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-react-assign",
  templateUrl: "./react-assign.component.html",
  styleUrls: ["./react-assign.component.css"],
})
export class ReactAssignComponent implements OnInit {
  myForm: FormGroup;
  projectStatus = ["stable", "Critical", "Finished"];
  constructor() {}

  ngOnInit() {
    this.createform();
  }
  createform() {
    this.myForm = new FormGroup({
      projectName: new FormControl("", [Validators.required],this.datta),
      email: new FormControl('',[Validators.required,Validators.email]),
      projectstatus: new FormControl('stable'),
    });
  }

  onSubmit() {
    console.log(this.myForm);
    console.log(this.myForm.value);
    
  }
   
  //custom validation
  // notAllowedName(control: FormControl) {
    
  //    if ((control.value) == 'test') {
  //     // custom validation error code
  //     return { namesIsNotAllowed: true };
  //   }
  //   return null;
  // }

  //async validation
  
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
