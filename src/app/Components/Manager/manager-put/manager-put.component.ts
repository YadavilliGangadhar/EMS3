import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Services/admin.service';
import { ManagerService } from 'src/app/Services/manager.service';

@Component({
  selector: 'app-manager-put',
  templateUrl: './manager-put.component.html',
  styleUrls: ['./manager-put.component.css']
})
export class ManagerPutComponent implements OnInit {

  id : any;

  getIndividual : any;

  constructor(private activatedRoute: ActivatedRoute, private api: ManagerService, public builder:FormBuilder,
    public toastr:ToastrService, private router:Router) {
    this.id = this.activatedRoute.snapshot.params['id']
    console.log(this.id)
  }

  form: any = this.builder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    project_Name: ['', Validators.required],
    project_Status: ['', Validators.required],
    designation: ['', Validators.required],
    role: ['',Validators.required],
    manager_Name: ['', Validators.required],
    login_Id :['', Validators.required],
    password :['',Validators.required]
  });

  updateMember() {
    if (this.form.valid) {
      console.log(this.form.value)
      this.api.updateMember(this.form.value, this.id).subscribe((responce) => {
        console.log(responce);
        this.router.navigate(['/manager/get']);
        this.toastr.success('Employee Updated Succesfully')
      })
    } else {
      this.toastr.warning('Enter Valid details')
      this.form.reset();
    }
  }

  ngOnInit(): void {
    this.api.getSingleMember(this.id).subscribe(
      {
        next: (res: any) => {
          this.getIndividual = res;
          console.log(this.getIndividual)
        },
        error: err => {
          console.log(err);
        }
      }

    )
    
  }


}
