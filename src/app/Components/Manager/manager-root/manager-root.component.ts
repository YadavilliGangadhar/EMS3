import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-root',
  templateUrl: './manager-root.component.html',
  styleUrls: ['./manager-root.component.css']
})
export class ManagerRootComponent {

  constructor(private router:Router){}

  logout(){
    alert('Your Successfully Logged Out');
    this.router.navigate(['']);
  }
}
