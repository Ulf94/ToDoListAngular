import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskApiService } from '../services/task-api.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  constructor(private service: TaskApiService, 
              private http: HttpClient,
              public userService: UserService) { }

  usersList$!: Observable<any[]>;

  ngOnInit(): void {
    this.usersList$ = this.service.getUsersList();
    
  }

  editUser(user: any){

  }

  deleteUser(user: any){

  }

}
