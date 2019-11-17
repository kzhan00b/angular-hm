import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User{
  id: string,
  createdAt: string,
  name: string,
  phone:string
}

export interface UserRatings{
  rating: boolean
}

export interface UserComments{
  id: string,
  userId: string,
  createdAt: string,
  name: string,
  avatar: string
}

@Injectable({
  providedIn: 'root'
})
export class UserTableDetailsService {
  private userApi: string = 'http://5dcea81c75f9360014c2619d.mockapi.io/api/v1/users';

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get<User[]>(this.userApi);
  }

  getSingleUser(queryUserId: string){
    let singleUser = this.userApi.concat(queryUserId);
    return this.http.get<User[]>(singleUser);
  }
  
  getRatings(queryUserId: string){
    let ratingApi = this.userApi.concat(queryUserId).concat("ratings");
    return this.http.get<User[]>(ratingApi);
  }

  getComments(queryUserId: string){
    let commentApi = this.userApi.concat(queryUserId).concat("comments");
    return this.http.get<User[]>(commentApi);
  }
}
