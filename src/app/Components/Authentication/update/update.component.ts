import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service'; 
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

constructor(private builder:FormBuilder, private service:AuthService, 
  @Inject(MAT_DIALOG_DATA) public data:any, private toastr:ToastrService, private dialogueref:MatDialogRef<UpdateComponent>){}
editData :any;
  ngOnInit(): void {
    this.service.GetAllRole().subscribe(res => {
      this.rolelist = res;
     } )
     if(this.data.usercode!=null){
      this.service.GetbyCode(this.data.usercode).subscribe(res =>{
        this.editData = res;
        this.updateData.setValue({
          role_Id:this.editData.role_Id,
          id: this.editData.id,
          name: this.editData.name,
          password: this.editData.password,
          email: this.editData.email,
          role: this.editData.role,
          isActive: this.editData.isActive
        })
      })
     }
  }

  rolelist : any;

  updateData = this.builder.group({
    role_Id : this.builder.control(''),
    id:this.builder.control(''),
    name:this.builder.control(''),
    password:this.builder.control(''),
    email:this.builder.control(''),
    role:this.builder.control(''),
    isActive:this.builder.control(false)
  })

  updateUser(){
    console.log(this.rolelist)
    if(this.updateData.valid){
      this.service.updateUser(this.updateData.value.id, this.updateData.value).subscribe(res =>{
        this.toastr.success('Updated Successfully');
        this.dialogueref.close();
        
      })
    }else{
      this.toastr.warning('Please Enter user Role')
    }
  }
}
