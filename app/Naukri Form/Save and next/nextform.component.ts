import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFireDatabase } from "angularfire2/database";
import { Router } from "@angular/router";



@Component({
    selector:'nextform-form',
    templateUrl:'./nextform.component.html'
    
})

export class NextFormForNaukri{
    title="Complete Your Profile"
    year: any[20] = []
    years: number = 2000 ;
    
    course:any[10]=[]
    courses:number=0;

   // default:string='selected Course Name'

    public NextFormModel:FormGroup;
basename:any='FinalForm';
    constructor( private db:AngularFireDatabase,private routes:Router) {

        
        this.NextFormModel=new FormGroup({
            c_name:new FormControl('',[Validators.required]),
            spec:new FormControl('',[Validators.required]),
            univercity:new FormControl('',[Validators.required]),
            graduated:new FormControl('',[Validators.required]),
            fun_area:new FormControl(),
            role:new FormControl(),
            profile_summary:new FormControl(),
                 

        })
        
        for (let i = 0; i <=20; i++) {
            this.year[i] = this.years;
            this.years++;
        }

        for(let j=0;j<=10;j++){
            this.course[j]=this.courses;
            this.courses++;
        }

    }
    saveyourprofile(){
        if(this.NextFormModel.valid){
        this.db.list(this.basename).push(this.NextFormModel.value);
        alert("your profile is successfully completed!!Thank you for responding.")
        this.routes.navigate(['/saveinfo'])
        }
        else{
            alert("please fill remaining options(it is required)")
        }
        
    }
  



}