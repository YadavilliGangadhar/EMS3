import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service'; 
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private builder: FormBuilder, private service:AuthService, private toastr:ToastrService, private router:Router){

  }

  registerData = this.builder.group({
    role_Id : this.builder.control(''),
    id:this.builder.control('',Validators.compose([Validators.required, Validators.minLength(5)])),
    name:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.required),
    email:this.builder.control('',Validators.compose([Validators.required, Validators.email])),
    role:this.builder.control(''),
    isActive:this.builder.control(false)
  })

  proceedRegistration(){
    console.log(this.registerData.value)
    if(this.registerData.valid){
      this.service.proceedRegister(this.registerData.value).subscribe(res => {
        this.toastr.success('please contact admin for activation','Registration Successful');
        this.router.navigate(['']);
      })
    }else{
      alert('Invalid Credentials')
      this.toastr.warning('Enter Correct Values');
    }
  }
}
