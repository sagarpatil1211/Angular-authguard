import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formdata:any;

constructor(private authservice:AuthService, private router:Router){}

ngOnInit() {
this.form();

if(this.authservice.isLoggedin()){
  this.router.navigate(["/admin/users"])
}
}

form(){
  this.formdata = new FormGroup({
    email: new FormControl("", Validators.compose([Validators.required, Validators.email])),
    password : new FormControl("", Validators.required)
   })
}


login(data:any){
//  console.log(data);
let result = this.authservice.login(data)
// console.log(result);

if(result.status == 'success'){
  // alert("success")
  localStorage.setItem("name", result.data.name)
  localStorage.setItem("email", result.data.email)
  localStorage.setItem("usertype", result.data.usertype)
  this.router.navigate(["/admin/users"])

}
else{
  alert("invalid email or password")
}

}

}
