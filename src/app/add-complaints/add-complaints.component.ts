import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-complaints',
  templateUrl: './add-complaints.component.html',
  styleUrls: ['./add-complaints.component.css']
})
export class AddComplaintsComponent {
  complaints=""
  constructor(private api:ApiService){}

  readValue=()=>{
    let data:any=    {
        
      "userId" : localStorage.getItem("userinfo"),
      "complaints" : this.complaints
  }
  this.api.addComplaints(data).subscribe(
    (generated:any)=>{
      console.log(generated)
    }
  )

  }

}
