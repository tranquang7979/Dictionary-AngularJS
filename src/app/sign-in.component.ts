import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sign-in',
    template: `
        <form (ngSubmit)="onSubmit(formSignIn)" #formSignIn="ngForm">
            <input 
                    placeholder="Email" 
                    ngModel 
                    #txtEmail="ngModel" 
                    name="email" 
                    required
                    email
            />
            <p  *ngIf="txtEmail.touched && formSignIn.controls.email?.errors?.required">
                Email is required
            </p>
            <p *ngIf="txtEmail.touched && txtEmail.errors?.email">
                Email is not valid
            </p>
            <input type="password" placeholder="Password" ngModel name="password" required/>
            <br><br>
            <button [disabled]="formSignIn.invalid">Submit</button>
        </form>
        <p>{{txtEmail.errors | json}}</p>
    `
})

export class SignInComponent implements OnInit{
    
    // can remove if have 'ngModel name="variable name"' like above
    //email: string;
    //password: string;

    constructor(){
        
    }

    ngOnInit(): void {
        
    }

    onSubmit(formSignIn){
        console.log(formSignIn.value);
    }
}