import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "./authenticationService";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './app.login.component.html',
})
export class AppLoginComponent implements OnInit {
    node:number=0
    constructor(private authService:AuthenticationService,private router:Router) {
    }
    formField = new FormGroup({
        username: new FormControl("",[Validators.required]),
        password:new FormControl("",[Validators.required]),

    });

    onLogin(user) {
        this.authService.login(user)
            .subscribe(resp=>{
                let jwt=resp.headers.get('Authorization');
                this.authService.saveToken(jwt);
                this.router.navigateByUrl("/tasks")


            },error => {this.node=1})
    }

    ngOnInit(): void {
    }
}
