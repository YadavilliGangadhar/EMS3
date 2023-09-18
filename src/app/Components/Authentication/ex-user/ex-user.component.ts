import { Component, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import {MatTableDataSource} from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-ex-user',
  templateUrl: './ex-user.component.html',
  styleUrls: ['./ex-user.component.css']
})
export class ExUserComponent {
  constructor(private service:AuthService, private dialog:MatDialog){
    this.LoadUser();
  }
  userList:any;
  dataSource:any;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  LoadUser(){
    this.service.GetAll().subscribe(res => {
      this.userList = res;
      this.dataSource = new MatTableDataSource(this.userList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  displayedColumns: string[] = ['role_Id','username', 'name', 'email','role', 'status', 'action'];

   updateUser(code:any){
     const popup = this.dialog.open(UpdateComponent,{
       enterAnimationDuration:'1000ms',
       exitAnimationDuration:'500ms',
       width:'50%',
       data:{
         usercode:code
       }
     })
     popup.afterClosed().subscribe(res =>{
      this.LoadUser();
     })
   }

  opendialog(){
  }


}
