import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../-shared/auth/authenticationService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  private tasks;

  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
    this.authService.getTasks()
        .subscribe(data=>{
          this.tasks=data;
        },error => {
            this.router.navigateByUrl("/login")

        });
  }

}
