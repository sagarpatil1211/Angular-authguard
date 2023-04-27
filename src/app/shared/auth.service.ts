import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  setToken(token:any){
    localStorage.setItem('token',token)
  }
  getToken(){
    return localStorage.getItem('token')
  }

  isLoggedin(){
    if(localStorage.getItem("token") != null)
    return true;
    else
    return false;
  }
  logout(){
    localStorage.clear();
    this.router.navigate([''])

  }

  login(data:any):any{
    if(data.email == "admin@gmail.com" && data.password == "123"){
      this.setToken("csjdfydtcddfefcvfdyefddkfvdyf");
      return {status:"success", data: {name:"Sagar", email:"admin@gmail.com", usertype:"admin"}}
    }
    else if(data.email == 'manager@gmail.com' && data.password == '123'){
      this.setToken("csjdfydtcddfefcvfdyefddkfvdyf");
      return {status:'success', data:{name:'manager', email:'manager@gmail.com', usertype:"manager"}}

    }
    else{
      return {status : 'failed'}
    }
  }
}
