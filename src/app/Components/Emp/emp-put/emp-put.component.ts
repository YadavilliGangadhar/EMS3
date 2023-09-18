import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpService } from 'src/app/Services/emp.service';

@Component({
  selector: 'app-emp-put',
  templateUrl: './emp-put.component.html',
  styleUrls: ['./emp-put.component.css']
})
export class EmpPutComponent {

 id : any;
  
  constructor(private activatedRoute: ActivatedRoute, private api: EmpService, public builder:FormBuilder,
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
    this.api.getEmp(this.id).subscribe(
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
        this.toastr.success('Status Updated Succesfully')
      })
    } else {
      this.toastr.warning('Enter Valid details')
      this.form.reset();
    }
    this.router.navigate(['/emp/e',this.id]);
  }

}
