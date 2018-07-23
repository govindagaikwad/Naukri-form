import { Component } from "@angular/core"
import { Router } from "@angular/router";
//database
import { AngularFireDatabase } from 'angularfire2/database'     //post(push)
import { Observable } from 'rxjs/internal/Observable';            //get
import { FormControl,FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { style } from "@angular/animations/src/animation_metadata";



@Component({
    selector: 'signup-form',
    templateUrl: './signup.component.html',
    
})
export class SignUpForm {

    title = "Sign Up";


    name: string;
    username: string;
    email: string;
    password: string;
    contact: string;

    basename: any = "Register";

    // data: Observable<any>;   //step 1
    // data1: any;             //step 2 


    nameFormControl = new FormControl('',[Validators.required,]);
    usernameFormControl =new FormControl('',[Validators.required,]);
    emailFormControl = new FormControl('',[Validators.required,Validators.email]);
    passwordFormControl = new FormControl('',[Validators.required]);
    contactFormControl = new FormControl('',[Validators.required,Validators.pattern('^[7-9][0-9]{9}$')]);

    constructor(private routers: Router, private db: AngularFireDatabase) {
        // this.data = db.list(this.basename).valueChanges(); //step 1
        // this.data.subscribe(res => {                         //step 2
        //     this.data1 = res;
        // })
    }
    // step:1:-coming data is in the form of list so that why we used obserable.
    //step 2:-by using suscribe , list form data is convert inside json form..

    submit() {
        if(this.nameFormControl.valid && this.usernameFormControl.valid && this.emailFormControl.valid
        && this.contactFormControl.valid && this.passwordFormControl.valid){
        this.routers.navigate(['/login'])
    }
    else{
        alert("fill correct information")
    }
        //push data to firebase
        let data = {
            name: this.name,
            username: this.username,
            email: this.email,
            contact: this.contact,
            password: this.password,
        }
        this.db.list(this.basename).push(data);
    }

    returnlogin() {
        this.routers.navigate(['/login']);
    
    }




}