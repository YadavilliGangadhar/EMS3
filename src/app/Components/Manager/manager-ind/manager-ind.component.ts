import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-manager-ind',
  templateUrl: './manager-ind.component.html',
  styleUrls: ['./manager-ind.component.css']
})
export class ManagerIndComponent implements OnInit {

  id : any;

  getIndividual : any;

  constructor(private activatedRoute: ActivatedRoute, private api: AdminService, private router: Router, public toastr: ToastrService) {
    this.id = this.activatedRoute.snapshot.params['id']
  }

  Edit() {
    this.router.navigate([this.router.url + '/edit', this.id]);
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
