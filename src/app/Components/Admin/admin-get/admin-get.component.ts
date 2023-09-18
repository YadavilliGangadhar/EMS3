import { Component } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service'; 
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-admin-get',
  templateUrl: './admin-get.component.html',
  styleUrls: ['./admin-get.component.css']
})
export class AdminGetComponent {

  constructor(public api: AdminService, private fb  : FormBuilder, private router : Router){}

  form:any =this.fb.group({
    id: ["" , Validators.required],
  });
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'designation', 'role', 'project_Name', 'project_Status', 'manager_Name'];

  getMember:any ;
  
  search_Id(){
    console.log(this.form.value);
    this.router.navigate(['/admin/e',this.form.value.id]);
  }
  
  ngOnInit(): void {
    this.api.getMembers().subscribe(
      {
        next: (res:any) => {
          this.getMember = res;
          console.log(this.getMember);
        },
        error: err => {
          console.log(err);
        }
      }
      
    )
  }
}
