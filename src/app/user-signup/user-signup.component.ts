import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {
  constructor(private api:ApiService){}
  data:any={}
  name=""
  address=""
  email=""
  phoneNumber=""
  password=""
  confirm_password=""
  addUser=()=>{
     this.data={
      "name":this.name,
      "address":this.address,
      "email":this.email,
      "phoneno":this.phoneNumber,
      "password":this.password
    }
    console.log(this.data)
    if(this.password == this.confirm_password){
    this.api.addUser(this.data).subscribe(
      (generated:any)=>{
        console.log(generated)
        if(generated.status=="success"){
          alert("added")
        }
        this.name=""
        this.address=""
        this.email=""
        this.phoneNumber=""
        this.password=""
        this.confirm_password=""

      }
    )
  }else{
      alert("password must be same")
    }

  }
}
