import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  userid:any=""
  data:any=[]
  constructor(private api:ApiService){
    this.userid=localStorage.getItem("userinfo")
    let data1:any=  {
      "id": this.userid
  }

    api.getProfile(data1).subscribe(
      (generated:any)=>{
        console.log(generated)
        this.data=generated

      }
    )
  }
}
