import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators ,FormGroup,FormControl} from '@angular/forms';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  angForm: FormGroup;
  submitted = false;
  public Firstname;
  public Lastname;
  public Phonenumber;
  public Email;
  public Password;
  
  constructor(private fb:FormBuilder) { }    

  


  ngOnInit() {


      this.angForm = this.fb.group({
        Firstname: ['', Validators.required],
        Lastname: ['', Validators.required],
        Phonenumber: ['', Validators.required],
        Email: ['', Validators.required],
        Password: ['', Validators.required]
    }); 

  }





  Reg(){
    this.submitted = true; 
    // stop here if form is invalid
    if (this.angForm.invalid) {
        return;
    }
     console.log(this.angForm.value);     
  }


}


