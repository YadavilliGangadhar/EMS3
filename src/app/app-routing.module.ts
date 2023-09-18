import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components import start
import { AuthRootComponent } from './Components/Authentication/auth-root/auth-root.component';
import { LoginComponent } from './Components/Authentication/login/login.component';
import { ExUserComponent } from './Components/Authentication/ex-user/ex-user.component';
import { RegisterComponent } from './Components/Authentication/register/register.component';
import { authGuard } from './Guards/auth.guard';
import { AdminRootComponent } from './Components/Admin/admin-root/admin-root.component';
import { AdminGetComponent } from './Components/Admin/admin-get/admin-get.component';
import { AdminIndComponent } from './Components/Admin/admin-ind/admin-ind.component';
import { AdminPutComponent } from './Components/Admin/admin-put/admin-put.component';
import { ManagerGetComponent } from './Components/Manager/manager-get/manager-get.component';
import { ManagerRootComponent } from './Components/Manager/manager-root/manager-root.component';
import { ManagerIndComponent } from './Components/Manager/manager-ind/manager-ind.component';
import { ManagerPutComponent } from './Components/Manager/manager-put/manager-put.component';
import { EmpRootComponent } from './Components/Emp/emp-root/emp-root.component';
import { EmpIndComponent } from './Components/Emp/emp-ind/emp-ind.component';
import { EmpPutComponent } from './Components/Emp/emp-put/emp-put.component';
import { AdminPostComponent } from './Components/Admin/admin-post/admin-post.component';
import { PrivacyComponent } from './Components/Common/privacy/privacy.component';
import { AboutComponent } from './Components/Common/about/about.component';
//components import end

const routes: Routes = [
  //authentication routing
  {
    path: '', component: AuthRootComponent, children: [
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },

  //admin routing
  {
    path: 'admin', component: AdminRootComponent, canActivate: [authGuard], children: [
      {
        path: 'get', component: AdminGetComponent
      },
      {
        path: 'e/:id', component: AdminIndComponent, children: [
          { path: 'edit/:id', component: AdminPutComponent }
        ]
      },
      { path: 'users', component: ExUserComponent },
      {path:'post',component:AdminPostComponent},
      {path:'privacy' , component:PrivacyComponent},
  {path:'about', component:AboutComponent}
    ]
  },

  //manager routing
  {
    path: 'manager', component: ManagerRootComponent, canActivate: [authGuard], children: [
      {
        path: 'get', component: ManagerGetComponent
      },
      {
        path: 'e/:id', component: ManagerIndComponent, children: [
          { path: 'edit/:id', component: ManagerPutComponent }
        ]
      },
      {path:'privacy' , component:PrivacyComponent},
  {path:'about', component:AboutComponent}
    ]
  },

  //employee routing
  {
    path: 'emp', component: EmpRootComponent, canActivate: [authGuard], children: [
      {
        path: 'e/:id', component: EmpIndComponent, children: [
          { path: 'edit/:id', component: EmpPutComponent }
        ]
      },
      {path:'privacy' , component:PrivacyComponent},
  {path:'about', component:AboutComponent}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
