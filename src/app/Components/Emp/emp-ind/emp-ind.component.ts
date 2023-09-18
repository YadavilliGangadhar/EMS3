import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpService } from 'src/app/Services/emp.service';

@Component({
  selector: 'app-emp-ind',
  templateUrl: './emp-ind.component.html',
  styleUrls: ['./emp-ind.component.css']
})
export class EmpIndComponent implements OnInit {
  id: any;
  getIndividual : any;

  constructor(private activatedRoute: ActivatedRoute, private api: EmpService, private router: Router, public toastr: ToastrService) {
    this.id = this.activatedRoute.snapshot.params['id']
  }

  Edit() {
    this.router.navigate([this.router.url + '/edit', this.id]);
  }

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
}
