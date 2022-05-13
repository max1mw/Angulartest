import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {BookComponent} from "../book/book.component";
import {WelcomeComponent} from "../pages/welcome/welcome.component";

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {
 @Input() validateForm!: FormGroup;


  // register(registerForm: NgForm) {
  //   this.bookComponent.postBook(registerForm.value).subscribe(
  //     (resp) => {
  //       console.log(resp);
  //       registerForm.reset();
  //       this.showBook();
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }
  //

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
this.register(this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }




  constructor(private fb: FormBuilder,
              public bookComponent: BookComponent) {}





  ngOnInit(): void {
   this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      price: [null, [Validators.required]],
      nbPages:[null, [Validators.required]],
      description:[null, [Validators.required]]
    });
  }

  public register(bookdata: any) {
    this.bookComponent.postBook(bookdata).subscribe(
      (resp) => {
        console.log("Succesfuly add")

      },
      (err) => {
        console.log(err);
      }
    );
  }
}
