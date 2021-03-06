import {Component, EventEmitter, Injectable, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {BookComponent} from "../book/book.component";
import {WelcomeComponent} from "../pages/welcome/welcome.component";
import {isCheckDisabled} from "ng-zorro-antd/core/tree";
import {NzNotificationService} from "ng-zorro-antd/notification";

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css'],
  providers:[NzNotificationService]
})

@Injectable({providedIn:'root'})
export class AddformComponent implements OnInit{
 @Input() validateForm!: FormGroup;
  @Input() visible = false;
  @Output() visibilityEvent = new EventEmitter<boolean>();
  @Output() submitEvent = new EventEmitter<boolean>();

  formName: string = 'Add new record';
  access:boolean =false;

  RegisterForm(): void {
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

  UpdateForm():void{
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);

      this.updateBook(this.validateForm.value.bookId,this.validateForm.value);

    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }

  }


  updateVisibility(value: boolean, submited: boolean = false): void {
    this.visible = value;
    if (submited) {
      this.submitEvent.emit(true);
    } else {
      this.visibilityEvent.emit(value);
    }
  }



  constructor(private fb: FormBuilder,
              public bookComponent: BookComponent,
              public bookcomp:WelcomeComponent,private notification: NzNotificationService) {}






  ngOnInit(): void {
   this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      price: [null, [Validators.required]],
      nbPages:[null, [Validators.required]],
      description:[null, [Validators.required]]
    });
  }

detinfo=null as any;

  public updateBook(id:any,bookdata:any){
    this.bookComponent.updateBook(id,bookdata).subscribe(
      (resp) => {
        console.log(resp);
        this.detinfo=resp;
        this.bookcomp.listOfdata.push(this.detinfo)
        this.SuccesNotify('success');
      },
      (err) => {
        console.log(err);
        this.WrongNotify('error');
      }
    );
  }

  public buttonswap(){
    if(this.buttonname=='Register'){
      this.RegisterForm();
    }else{
      if(this.buttonname=='Update'){
        this.UpdateForm();
      }

    }
  }

  public register(bookdata: any) {
    this.bookComponent.postBook(bookdata).subscribe(
      (resp) => {
        console.log("Succesfuly add")
        this.SuccesNotify('success');
        this.detinfo=resp;
        this.bookcomp.listOfdata.push(this.detinfo)
      },
      (err) => {
        console.log(err);
        this.WrongNotify('error');
      }
    );
  }

  submit:string="RegisterForm()";
  buttonname:string="Ok";


  @ViewChild(WelcomeComponent, { static: true }) child: WelcomeComponent | undefined;

addnewBook():void{
  this.validateForm = this.fb.group({
    title: [null, [Validators.required]],
    price: [null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    nbPages:[null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    description:[null, [Validators.required]]
  });
  this.submit="RegisterForm()";
  this.formName="Add new Book"
  this.buttonname="Register";
  this.visible=true;


}


  setBookInfo(data:any): void{
    console.log(data);
    this.validateForm = this.fb.group({
      bookId:[data.bookId],
      title: [data.title, [Validators.required]],
      price: [data.price, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      nbPages:[data.nbPages, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      description:[data.description, [Validators.required]]
    });

    this.validateForm.disable();
    this.buttonname="OK";
    this.formName="View Book Info"


this.visible=true;

  }


  UpdateBookInfo(data:any):void{
    this.setBookInfo(data);




    this.formName="Update Book Info";
    this.buttonname="Update";
    this.validateForm.enable();
    this.visible=true;
    this.bookcomp.showBook();

  }

  titleinfo=null as any;
  // FindByTitleForm(data:any):void{
  //
  //   this.titleinfo= this.bookcomp.bookDetails.title.find(data);
  //   this.setBookInfo(this.titleinfo);
  //
  //   this.formName="View Book Info";
  //   this.buttonname="Ok";
  //   this.visible=true;
  //
  // }

  FindByTitlemet():void{

  }


  handleOkBookModal(): void {
    console.log('Ok clicked!');
    this.updateVisibility(false);
    this.bookcomp.showBook();
  }

  handleCancelBookModal(): void {
    console.log('Cancel clicked!');
    this.updateVisibility(false);
    this.bookcomp.showBook();
  }

  handleOkBookInfoModal(): void {
    console.log('Ok clicked!');
    this.visible = false;
    // this.bookbyidinf= null as any;
  }

  handleCancelBookInfoModal(): void {
    console.log('Cancel clicked!');
    this.visible = false;
    //this.bookbyidinf= null as any;
  }

  SuccesNotify(type: string): void {
    this.notification.create(
      type, '' +
      'Successful',
      'The changes were successful'
    );
  }
  WrongNotify(type: string): void {
    this.notification.create(
      type, '' +
      'Error',
      'Something wrong happened'
    );}

}
