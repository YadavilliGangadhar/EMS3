import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-admin-put',
  templateUrl: './admin-put.component.html',
  styleUrls: ['./admin-put.component.css']
})
export class AdminPutComponent implements OnInit {
  id: any;

  constructor(private activatedRoute: ActivatedRoute, private api: AdminService, public builder:FormBuilder,
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

  getIndividual:any ;

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


  updateData() {
    if (this.form.valid) {
      console.log(this.form.value)
      this.api.updateMember(this.form.value, this.id).subscribe((responce) => {
        console.log(responce);
        this.router.navigate(['/admin/get']);
        this.toastr.success('Employee Updated Succesfully')
      })
    } else {
      this.toastr.warning('Enter Valid details')
      this.form.reset();
    }
  }

}
