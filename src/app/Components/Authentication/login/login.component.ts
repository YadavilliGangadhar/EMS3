import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private builder: FormBuilder, private service: AuthService, private toastr: ToastrService, private router: Router) {
    sessionStorage.clear();
  }

  loginData = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  })

  ngOnInit() {
  }

  userData: any;

  login() {
    if (this.loginData.valid) {
      this.service.GetbyCode(this.loginData.value.username).subscribe(res => {
        this.userData = res;
        console.log(this.userData);
        if (this.userData.password === this.loginData.value.password) {
          if (this.userData.isActive) {
            sessionStorage.setItem('username', this.userData.id);
            sessionStorage.setItem('userrole', this.userData.role);
            if(this.userData.role === 'admin'){
              this.router.navigate(['/admin'])
            }else if(this.userData.role === 'manager'){
              this.router.navigate(['/manager'])
            }else{
              this.router.navigate(['/emp/e',this.userData.role_Id])
            }
          } else {
            this.toastr.warning('please contact admin', 'inactive user')
          }
        } else {
          this.toastr.warning('invalid credentials')
        }
        this.loginData.reset()
      })
    }
  }
}