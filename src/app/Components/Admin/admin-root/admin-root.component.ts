import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-root',
  templateUrl: './admin-root.component.html',
  styleUrls: ['./admin-root.component.css']
})
export class AdminRootComponent {

  constructor(private router:Router){}

  logout(){
    alert('Your Successfully Logged Out');
    this.router.navigate(['']);
  }

}
