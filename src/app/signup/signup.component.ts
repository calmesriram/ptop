import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators ,FormGroup,FormControl} from '@angular/forms';
import { AuthenticationService, TokenPayload } from '../services/authentication.service';
import { Router } from '@angular/router';

declare let $: any;



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  // credentials: TokenPayload = {
  //   email: '',
  //   name: '',
  //   password: '',
  //   keys: '',
  //   _id: ''
  // };

  angForm: FormGroup;
  submitted = false;
  public fname:any;
  public lname:any;
  public phnumber;
  public myemail;
  public pwd;
  
  constructor(private fb:FormBuilder,private auth: AuthenticationService, private router: Router) { 
    this.auth.logout()
    // this.auth.hide();
  }    

  Reg() {
        this.submitted = true; 
        console.log(this.angForm.value);
    // stop here if form is invalids
    if (this.angForm.invalid) {
        return;
    }
    // email: "dd@gmail.com"
    // firstname: "d"
    // keys: ""
    // lastname: "d"
    // name: ""
    // password: "dd@gmail.com"
    // phonenumber: "1235468791"
    var d = {
      email:this.angForm.value.myemail,
      firstname:this.angForm.value.fname,
      lastname:this.angForm.value.lname,
      password:this.angForm.value.pwd,
      phonenumber:this.angForm.value.phnumber,
      keys:"",
      name:"",
      _id:""      
    }        

  console.log(d);
        console.log("Register 1 ......... ")
        this.auth.register(d).subscribe(() => {
    
          console.log("Register ......... ")
          // this.router.navigateByUrl('/dashboard');
          this.refresh();
        }, (err) => {
    
          console.log("Register error......... ")
          console.error(err);
        });
      }
    
      refresh(): void {
    
        console.log("Refresh ......... ")
        // window.location.href = '/login';
        this.router.navigateByUrl("/login");
        window.location.reload();
      }
  


  ngOnInit() {


      this.angForm = this.fb.group({
        fname: ['', Validators.required],
        lname: ['', Validators.required],
        phnumber: ['', Validators.required],
        myemail: ['', Validators.required],
        pwd: ['', Validators.required]
    }); 

  }

  // omit_special_char(event) {
  //   var k;
  //   k = event.charCode;  //         k = event.keyCode;  (Both can be used)
  //   return ((k >= 48 && k <= 57));
  // }

  // take_special_char(event) {
  //   var l;
  //   l = event.charCode;  //         k = event.keyCode;  (Both can be used)
  //   return ((l > 64 && l < 91) || (l > 96 && l < 123) || l == 8 || l == 32 || (l >= 48 && l <= 57) || l == 46);
  // }

  // ngAfterViewInit() {
  //   $.validate({
  //     modules: 'location, date, security, file, validate_strength'
  //   });
  //   $('#ks-maxlength-area').restrictLength($('#ks-maxlength-label'));
  // }



  // Reg(){
  //   this.submitted = true; 
  //   // stop here if form is invalid
  //   if (this.angForm.invalid) {
  //       return;
  //   }
  //    console.log(this.angForm.value);     
  // }


}


