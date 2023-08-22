import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../Services/service1.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-asscomp3',
  templateUrl: './asscomp3.component.html',
  styleUrls: ['./asscomp3.component.css']
})
export class Asscomp3Component implements OnInit {
  namesearch: string = '';
  objUserArray : any[] = [];
  constructor(private objService: Service1Service,private objUser: UserService) { }

  ngOnInit() {

    var obj = this.objUser.getUsers();
    obj.subscribe((res: any []) => {
      console.log(res)
      this.objUserArray = res;
      
     })
  }

}
