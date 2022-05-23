import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AppServiceService } from '../app-service.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  errMessage: any;
  postId: any;
  successMessage:any;
  
  constructor(private service: AppServiceService,private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.postId = this.router.snapshot.paramMap.get('id');
    if(this.postId){
      this.service.getSingleData(this.postId).subscribe((res:any)=>{
        this.userForm.patchValue({
          'id':res[0].id,
          'title':res[0].title,
          'description':res[0].description,
          'author':res[0].author,
        })
      },err=>{
        console.log("err = ",err);      
      })
    }
  }

  userForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required)
  })
  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value)
      this.service.createPost(this.userForm.value).subscribe(
        (res:any) => {
          console.log('Response = ', res)
          this.successMessage = res.message;
          this.userForm.reset();
        },
        (err) => {
          console.log('Error = ', err)
        },
      )
    } else {
      console.log('All fields required!')
      this.errMessage = 'All fields required!'
    }
  }

  onUpdate() {
    let formData = this.userForm.value;
    console.log("formData = ",formData);
    if(this.userForm.valid){
      this.service.updatePostById(this.postId,formData).subscribe((res:any)=>{
          console.log("res = ",res);        
          this.successMessage = res.message;
        },err=>{
        console.log("err = ",err);        
      })
    }else{
      console.log('All fields required!')
      this.errMessage = 'All fields required!'
    }
    
  }
}
