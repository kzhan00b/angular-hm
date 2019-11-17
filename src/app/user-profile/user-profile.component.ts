import { Component, OnInit } from '@angular/core';
import { UserTableDetailsService, User } from '../user-table-details.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public singleUser: User;

  constructor(private user: UserTableDetailsService) { }

  ngOnInit() {
  }

  displayUser(userId: string){
    let result= this.user.getSingleUser('1');
    return result;
  }

}
