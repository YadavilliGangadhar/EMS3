import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/Services/manager.service';

@Component({
  selector: 'app-manager-get',
  templateUrl: './manager-get.component.html',
  styleUrls: ['./manager-get.component.css']
})
export class ManagerGetComponent {

  constructor(public api: ManagerService, private router : Router, private builder:FormBuilder){}

  form:any =this.builder.group({
    id: ["" , Validators.required],
  });

  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'designation', 'role', 'project_Name', 'project_Status', 'manager_Name'];

  getMember : any;
  search_Id(){
    console.log(this.form.value);
    this.router.navigate(['/manager/e',this.form.value.id]);
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
