import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
//import { SignUpService } from './sign-up.service';

@Component({
    selector: 'app-sign-up',
    template: `
        <form (ngSubmit)="onSubmit()" [formGroup]="formSignUp">
            <input 
                    placeholder="Email" 
                    formControlName="email" 

            />
            <p *ngIf="formSignUp.get('email').touched && formSignUp.controls.email.invalid">Email is required</p>
            <br>
            <input  type="password" 
                    placeholder="Password"
                    formControlName="password"
            />
            <br><br>
            <div formGroupName="subjects">
                <label><input type="checkbox" formControlName="nodeJS"/>NodeJS</label>
                <br>
                <label><input type="checkbox" formControlName="reactJS"/>ReactJS</label>
                <br>
                <label><input type="checkbox" formControlName="angularJS"/>AngularJS</label>   
            </div>
            <button [disabled]="formSignUp.invalid">Submit</button>
        </form>
        <code>{{ formSignUp.controls.email.errors | json }}</code>
    `,
    //providers: [SignInService]
})

export class SignUpComponent implements OnInit {

    formSignUp: FormGroup;

    // constructor() {
    //     this.formSignUp = new FormGroup({
    //         email: new FormControl('email123@gmail.com'),
    //         password: new FormControl(),
    //         subjects: new FormGroup({
    //             nodeJS: new FormControl(true),
    //             reactJS: new FormControl(false),
    //             angularJS: new FormControl(true)
    //         })
    //     });
    // }
    // this is a way to init a Reactive Form
    // other way is like 'constructor' and codes in 'ngOnInit'
    constructor(private fb: FormBuilder) {}
    ngOnInit(): void {
        this.formSignUp = this.fb.group({
            email: ['', [Validators.email, gmailValidator]],
            password: '',
            subjects: this.fb.group({
                nodeJS: false,
                reactJS: true,
                angularJS: false
            })
        });
    }

    onSubmit() {
        console.log(this.formSignUp.value);
    }

}

function gmailValidator(formControl: FormControl){
    if(formControl.value.includes('@gmail.com'))
        return null;
    return { gmail: true };
}