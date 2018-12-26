import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators ,FormGroup,FormControl} from '@angular/forms';
import { AuthenticationService, TokenPayload } from '../services/authentication.service';
import { Router } from '@angular/router';
import { CreateOrderService } from '../services/create-order.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myangForm: FormGroup;
  submitted = false;
  public myemail:any;
  public pwd:any;
// public myusernamenavbar:any;
  // credentials: any = {
  //   email: '',
  //   password: '',
  //   keys: '',
  //   _id: ''
  // };
  
  constructor(private CreateOrderService:CreateOrderService,private fb:FormBuilder,private auth: AuthenticationService, private router: Router) { }    

  


  ngOnInit() {
    // var myVar = setInterval(()=>
    // {
    //   this.auth.check_user().then(state=>{
    //     if(state){
    //       this.router.navigate(['menu'])
    //     }
    //   })   
    //  }
    // , 500);

      this.myangForm = this.fb.group({
        myemail: ['', Validators.required],
        pwd: ['', Validators.required]
    }); 

  }

  login(){
    this.submitted = true; 
    // stop here if form is invalid
    if (this.myangForm.invalid) {
        return;
    }
    
     var d = {
       email:this.myangForm.value.myemail,
       password:this.myangForm.value.pwd,
       keys: "",
       _id: ""
     }  
     console.log(d)
     this.auth.login(d).subscribe((user) => {
      console.log("user details   =>", user)
      // console.log(user['ram'])
      // console.log(user['ram'].firstname)
      // this.CreateOrderService.myusernamenavbar = user['ram'].firstname;
      console.log("Login successful")
      //window.location.href ='/dashboard';
       this.router.navigateByUrl("/menu");
      // this.refresh();
    }, (err) => {
      console.error(err);
    });
  }

  // login() {

  //   console.log(this.credentials)
  //   this.auth.login(this.credentials).subscribe((user) => {
  //     console.log("user details   =>", user)
  //     //window.location.href ='/dashboard';
  //     //  this.router.navigateByUrl("/dashboard");
  //     // this.refresh();
  //   }, (err) => {
  //     console.error(err);
  //   });
  // }

  refresh(): void {
    // this.router.navigateByUrl("/dashboard");
    // window.location.reload();
  }


  // email: "gowtham.r@mnw.co.in"
  // keys: ""
  // password: "gowtham.r@mnw.co.in"
  // _id: ""


}
