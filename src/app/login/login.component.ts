import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators ,FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myangForm: FormGroup;
  submitted = false;
  public myemailid:any;
  public Password:any;
  
  constructor(private fb:FormBuilder) { }    

  


  ngOnInit() {


      this.myangForm = this.fb.group({
        myemailid: ['', Validators.required],
        Password: ['', Validators.required]
    }); 

  }





  Login(){
    this.submitted = true; 
    // stop here if form is invalid
    if (this.myangForm.invalid) {
        return;
    }
     console.log(this.myangForm.value);     
  }

}
