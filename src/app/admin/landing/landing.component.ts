import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit  {

  constructor(private authservice:AuthService, private router:Router){

  }
  ngOnInit(): void {
    window.addEventListener('focus',()=>{
      console.log("calling");
      if(this.authservice.isLoggedin() == false){
        this.router.navigate([''])
      }
      
    })
  }


  logout(){
    this.authservice.logout();

  }

}
