import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(private service : AppServiceService) { }

  posts:any;
  successMessage:any;

  ngOnInit() {
    this.getAllPostsFromAPI();  
  }

  getAllPostsFromAPI() {
    this.service.getAllPosts().subscribe((res)=>{
      console.log("Response form API is = ",res);   
      this.successMessage = null;
      this.posts = res;  
    },(err)=>{
      console.log("the error is = ",err);
    })
  }

  deletePostById(id:any){
    console.log("28 delete post",id);
    
    this.service.deletePostByID(id).subscribe((res:any)=>{
      console.log("res = ",res);
      this.successMessage = res["message"];
      this.getAllPostsFromAPI();
    },err=>{
      console.log("err = ",err);      
    })
  }


}
