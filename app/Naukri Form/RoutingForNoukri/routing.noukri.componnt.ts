import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SignUpForm } from '../SignUp/signup.component';
import { LoginForm } from '../login/login.component';
import { NaukriForm } from '../form/form.component';
import { NextFormForNaukri } from '../Save and next/nextform.component';
import { StudentInfoSaveTable } from '../../AllStudentInformation/studentinfo.component';

const naukriRoute: Routes = [
    { path: 'signup', component: SignUpForm },
    { path: 'login', component: LoginForm },
    { path: 'naukrif1', component: NaukriForm },
    { path: 'naukrif2', component: NextFormForNaukri },
    { path: 'saveinfo', component: StudentInfoSaveTable },
    {path:'',redirectTo:'login',pathMatch:'full'}
]

@NgModule({
    imports: [
         RouterModule.forRoot(naukriRoute)
    ],
    exports: [RouterModule]

})
export class NaukriRouting {

}