import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myForm: FormGroup;

  constructor(private toastr: ToastrService,private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  ngOnInit(): void {
    this.createForm();

  }
  createForm() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
  onSubmit() {
    console.log( this.myForm.controls['name'].errors)
    console.log( this.myForm.controls['email'].errors)
    if(this.myForm.valid){
      this.toastr.success('Success');
    }
    console.log(this.myForm.value);
  }

     products= [
      {
        "id": 1,
        "name": "Product A",
        "description": "This is product A.",
        "price": 19.99,
        "category": "Category A",
        "image": "https://picsum.photos/200"
      },
      {
        "id": 2,
        "name": "Product B",
        "description": "This is product B.",
        "price": 29.99,
        "category": "Category B",
        "image": "https://picsum.photos/201"
      },
      {
        "id": 3,
        "name": "Product C",
        "description": "This is product C.",
        "price": 39.99,
        "category": "Category A",
        "image": "https://picsum.photos/202"
      }
    ]
    show=()=>{
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
// if (toastTrigger) {
//   toastTrigger.addEventListener('click', () => {
//     const toast = new bootstrap.Toast(toastLiveExample)

//     toast.show()
//   })
// }
    }


  title = 'polic';
  showFiller = false;
  showSuccess() {
    this.toastr.show('Hello world!', 'Toastr fun!');
  }

}
