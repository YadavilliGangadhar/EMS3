import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-admin-ind',
  templateUrl: './admin-ind.component.html',
  styleUrls: ['./admin-ind.component.css']
})
export class AdminIndComponent implements OnInit {
  id: any;

  constructor(private activatedRoute: ActivatedRoute, private api: AdminService, private router: Router, public toastr: ToastrService) {
    this.id = this.activatedRoute.snapshot.params['id']
  }

  getIndividual: any;

  Edit() {
    this.router.navigate([this.router.url + '/edit', this.id]);
  }

  del() {
    if (confirm("Are you really want to delete " + this.getIndividual.name)) {
      this.api.deleteMember(this.id).subscribe(
        {
          next: (res: any) => {
            this.router.navigate(['/admin/get'])
            this.toastr.success('Employee Deleted Successfully');
          },
          error: err => {
            console.log(err);
          }
        })
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
