import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireDatabase } from "angularfire2/database";
import { map } from 'rxjs/Operators';
import { FormGroup, FormControl } from "@angular/forms";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";


@Component({
    selector: 'login-form',
    templateUrl: './login.component.html'
})

export class LoginForm implements OnInit {

    title = "Login";

    getsignupdata:any;
    
    username:any ="";
    password:any ="";

    //public checkValidData:FormGroup;
    constructor(private routers: Router,private db:AngularFireDatabase) {
       
        // this.checkValidData=new FormGroup({
        //     username:new FormControl(),
        //     password: new FormControl()
        // })
     }

     ngOnInit(){
        this.db.list('Register').snapshotChanges().pipe(map(change =>{
            return change.map(c => ({$key : c.payload.key, ...c.payload.val()}))
        })).subscribe(res => {
            this.getsignupdata = res;
        });
     }
     i:boolean=false;
    login() {
    //     if((this.username!="")&&(this.password!="")){
    //    for(let i = 0;i<this.getsignupdata.length; i++) {
        
    //       if (this.getsignupdata[i].username == this.username && this.getsignupdata[i].password ==this.password ){
    //         this.routers.navigate(['/naukrif1'])
    //        break;
    //        }
            
    //     }
    //         alert("incorrect username and password.try again")
    //     }
    //       else{
    //           alert("Please check internet connection")
    //       }

    //    }

       let username = this.username;
       let password = this.password;
       let value = this.getsignupdata.filter(function(e1:any){ 
        return (e1.username  == username && e1.password == password);
        });
        if((this.username!="")&&(this.password!="")){
            if(value != ""){
                this.routers.navigate(['/naukrif1']);
            }
            else{
                alert("incorrect username and password.try again");
            }
        }else{
        alert("fill username and password,check internet connection")
        }
    }

    signup() {
        this.routers.navigate(['/signup']);
    }

}