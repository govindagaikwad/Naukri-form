import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AngularFireDatabase } from "angularfire2/database";


@Component({
    selector: 'Naukri-form',
    templateUrl: './form.component.html'
})

export class NaukriForm {
    title = "Complete Your Profile"
    public NoukriModel: FormGroup;
    year: any[12] = []
    years: number = 0 ;

    nameFormControl = new FormControl('',[
        Validators.required,
    ]
    );
    emailFormControl = new FormControl('',[
        Validators.required,
        Validators.email,
    ]
    );
    contactFormControl = new FormControl('',[
        Validators.required,
        Validators.pattern('^[7-9][0-9]{9}$'),
    ]
    );
    course:any[10]=[]
    courses:number=0;
    constructor(private routers:Router,private db:AngularFireDatabase ) {
        for (let i = 0; i <=12; i++) {
            this.year[i] = this.years;
            this.years++;
        }
        for(let j=0;j<=10;j++){
            this.course[j]=this.courses;
            this.courses++;
        }

    }
//FOR FIRBASE STEPS:
    your_name:string;
    email_address:string;
    current_location:string;
    exp_year:string;
    exp_month:string;
    current_ind:string;
    mobile_no:string;
    fun_area:string;
    basic_g:string;
    post_g:string;
    doct_phd:string;
    dip_cert1:string;
    dip_cert2:string;
    dip_cert3:string;

    
    database:any= "InfoForm1";
    


    SaveAndNext(){
        if(this.nameFormControl.valid && this.contactFormControl.valid && this.emailFormControl.valid){

            let data={
                your_name:this.your_name,
                email_address:this.email_address,
                current_location:this.current_location,
                mobile_no:this.mobile_no,
                exp_year:this.exp_year,
                exp_month:this.exp_month,
                current_ind:this.current_ind,
                fun_area:this.fun_area,
                basic_g:this.basic_g,
                post_g:this.post_g,
                doct_phd:this.doct_phd,
                dip_cert1:this.dip_cert1,
                dip_cert2:this.dip_cert2,
                dip_cert3:this.dip_cert3
            }
            this.db.list(this.database).push(data);
           

            this.routers.navigate(['/naukrif2'])
        }else{
            alert(" please Fill out required fields ")
        }
        
    }
    
}