import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AngularFireDatabase } from "angularfire2/database";


@Component({
    selector:'student-data',
    templateUrl:'./studentinfo.component.html',
    styleUrls:['./studentinfo.component.css']

})
export class StudentInfoSaveTable{


    title="All Student Information!"
  data:Observable<any>
data2:any;
data1:any;
data3:any;
    constructor(private db : AngularFireDatabase){
        db.list('Register').valueChanges().subscribe(res=>{                         
            this.data2=res;
        })
        db.list('InfoForm1').valueChanges().subscribe(res=>{                         
            this.data1=res;
        })
        db.list('FinalForm').valueChanges().subscribe(res=>{                         
            this.data3=res;
        })
    }
}