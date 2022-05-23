import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'angular_app';

  constructor(private service : AppServiceService){

  }
  ngOnInit() {
    // this.getAllPostsFromAPI();  
  }

  // getAllPostsFromAPI(){
  //   this.service.getAllPosts().subscribe((res)=>{
  //     console.log("Response form API is = ",res);      
  //   },(err)=>{
  //     console.log("the error is = ",err);
      
  //   })
  // }

}
