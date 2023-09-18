import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.css']
})
export class AdminPostComponent {

  constructor(public fb: FormBuilder, private api: AdminService, public toastr: ToastrService, private router : Router) { }

  form: any = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    project_Name: ['', Validators.required],
    project_Status: ['', Validators.required],
    designation: ['', Validators.required],
    role: ['', Validators.required],
    manager_Name: ['', Validators.required],
    login_Id: ['', Validators.required],
    password: ['', Validators.required]
  });

  postData() {
    if (this.form.valid) {
      console.log(this.form.value)
      this.api.postMember(this.form.value).subscribe((responce) => {
        console.log(responce);
        this.toastr.success('Employee added Succesfully')
        this.router.navigate(['/admin/get'])
      })
    } else {
      this.toastr.warning('Enter Valid details')
      this.form.reset();
    }
  }
  resetF() {
    this.form.reset();
  }
}