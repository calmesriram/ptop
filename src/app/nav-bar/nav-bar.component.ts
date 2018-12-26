import { Component, OnInit } from '@angular/core';
import { CreateOrderService } from '../services/create-order.service';
import { AuthenticationService, TokenPayload } from '../services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
public displayusername:string;
// public clear:any;  
constructor(private createOrderService: CreateOrderService,private auth: AuthenticationService,private router:Router) { }

  ngOnInit() {
    
    // setInterval(() => {
    //  var  a = this.createOrderService.myusernamenavbar;
    //   this.displayusername = this.createOrderService.myusernamenavbar;
    //   console.log(a)  
    // }, 1000);
    
  }

  logout() {
    this.auth.logout();
    // this.router.navigateByUrl("/login");
  }

}
