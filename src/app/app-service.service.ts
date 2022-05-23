import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  constructor(private http: HttpClient) {}

  getAllPosts(){
    return this.http.get("/api/post");
  }
  createPost(data:any){
    console.log("data = ",data);    
    return this.http.post("/api/post",data);
  }
  
  deletePostByID(id:any){
    return this.http.delete("/api/post/"+id);
  }
  
  updatePostById(id:any,data:any){
    return this.http.put("/api/post/"+id,data);
  }

  getSingleData(id:any){
    return this.http.get("/api/post/"+id)
  }
}
