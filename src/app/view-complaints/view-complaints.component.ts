import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-complaints',
  templateUrl: './view-complaints.component.html',
  styleUrls: ['./view-complaints.component.css']
})
export class ViewComplaintsComponent {
  data:any=[]
  constructor(private api:ApiService){
    api.viewComplaints().subscribe(
      (generated:any)=>{
        this.data=generated
      }
    )
  }



}
