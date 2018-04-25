import { Component, OnInit } from '@angular/core';
import { SignInService } from './sign-in.service';

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
            <input  type="password" 
                    placeholder="Password" 
                    ngModel 
                    #txtPassword="ngModel"
                    name="password" 
                    required
                    minlength="6"
                    pattern="[a-z]*"
            />
            <br><br>
            <div ngModelGroup="subjects">
                <label><input type="checkbox" [ngModel]="false" name="football"/>Football</label>
                <br><br>
                <label><input type="checkbox" [ngModel]="false" name="NodeJS"/>NodeJS</label>
                <br><br>
                <label><input type="checkbox" [ngModel]="false" name="ReactJS"/>ReactJS</label>
            </div>
            <br><br>
            <button [disabled]="formSignIn.invalid">Submit</button>
        </form>
        <p>{{txtEmail.errors | json}}</p>
        <p>{{txtPassword.errors | json}}</p>
        <p>{{ formSignIn.value | json }}</p>
    `,
    providers: [SignInService]
})

export class SignInComponent implements OnInit {

    // can remove if have 'ngModel name="variable name"' like above
    //email: string;
    //password: string;

    constructor(private signInService: SignInService) {

    }

    ngOnInit(): void {

    }

    onSubmit(formSignIn) {
        this.signInService.sendPost(formSignIn)
        .then(result => console.log(result))
        .catch(err => console.log(err));
    }

}