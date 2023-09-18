import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoginComponent } from './Components/Authentication/login/login.component';
import { AuthRootComponent } from './Components/Authentication/auth-root/auth-root.component';
import { RegisterComponent } from './Components/Authentication/register/register.component';
import { UpdateComponent } from './Components/Authentication/update/update.component';
//Exaple user import start
import { ExUserComponent } from './Components/Authentication/ex-user/ex-user.component';
//Example user import end

//Admin Components Start
import { AdminRootComponent } from './Components/Admin/admin-root/admin-root.component';
import { AdminGetComponent } from './Components/Admin/admin-get/admin-get.component';
import { AdminIndComponent } from './Components/Admin/admin-ind/admin-ind.component';
import { AdminPutComponent } from './Components/Admin/admin-put/admin-put.component';
import { AdminPostComponent } from './Components/Admin/admin-post/admin-post.component';

//Admin Components End
//Manager Components Start
import { ManagerRootComponent } from './Components/Manager/manager-root/manager-root.component';
import { ManagerGetComponent } from './Components/Manager/manager-get/manager-get.component';
import { ManagerIndComponent } from './Components/Manager/manager-ind/manager-ind.component';
import { ManagerPutComponent } from './Components/Manager/manager-put/manager-put.component';
//Manager Components End
//Emp Components Start
import { EmpRootComponent } from './Components/Emp/emp-root/emp-root.component';
import { EmpIndComponent } from './Components/Emp/emp-ind/emp-ind.component';
import { EmpPutComponent } from './Components/Emp/emp-put/emp-put.component';
import { PrivacyComponent } from './Components/Common/privacy/privacy.component';
import { AboutComponent } from './Components/Common/about/about.component';
//Emp Components End
@NgModule({
  declarations: [
    AppComponent,
//Auth
    AuthRootComponent,
    LoginComponent,
    ExUserComponent,
    RegisterComponent,
    UpdateComponent,
//Admin
    AdminRootComponent,
    AdminGetComponent,
    AdminIndComponent,
    AdminPutComponent,
    AdminPostComponent,
//Manager
    ManagerRootComponent,
    ManagerGetComponent,
    ManagerIndComponent,
    ManagerPutComponent,
//Employee
    EmpRootComponent,
    EmpIndComponent,
    EmpPutComponent,
//common
    PrivacyComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
