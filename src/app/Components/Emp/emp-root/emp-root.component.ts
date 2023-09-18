import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-root',
  templateUrl: './emp-root.component.html',
  styleUrls: ['./emp-root.component.css']
})
export class EmpRootComponent {

  
  constructor( private router:Router) {}

  logout(){
    alert('Your Successfully Logged Out');
    this.router.navigate(['']);
  }
}
