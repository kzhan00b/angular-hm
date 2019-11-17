import { Component, OnInit } from '@angular/core';
import { UserTableDetailsService, User } from '../user-table-details.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  public userArray: User[];
  
  constructor(private userList: UserTableDetailsService) { 
  }
  
  ngOnInit() {
    this.userList.getUser().subscribe(result=>{
      this.userArray = result;
    });
  }

  doSomething(test){
    console.log(test);
  }

}
