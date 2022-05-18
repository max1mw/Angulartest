import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {WelcomeComponent} from "../pages/welcome/welcome.component";
import {TransactionComponent} from "../transaction/transaction.component";
import {formatDate} from "@angular/common";
import {NzNotificationService} from "ng-zorro-antd/notification";

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-dd',
  },
  display: {
    dateInput: 'YYYY-MM-dd',
  },
};

export interface Transaction {
  idDep: string;
  borrowdate: Date;
  returndate: Date;
  isreturnet: boolean;
}

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css'],
  providers:[
    {provide:MY_DATE_FORMATS,useValue:MY_DATE_FORMATS},
    NzNotificationService
  ]
})
export class TransactionFormComponent implements OnInit {

  @Input() validateForm!: FormGroup;
  @Input() visible = false;
  @Output() visibilityEvent = new EventEmitter<boolean>();
  @Output() submitEvent = new EventEmitter<boolean>();


  buttonname:string="Ok";
  formName:string="Add New Transaction"
  constructor(private fb: FormBuilder,
              public welbook:WelcomeComponent,
              public transaction:TransactionComponent,
              private notification: NzNotificationService) { }

  ngOnInit(): void {
  }


  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  updateVisibility(value: boolean, submited: boolean = false): void {
    this.visible = value;
    if (submited) {
      this.submitEvent.emit(true);
    } else {
      this.visibilityEvent.emit(value);
    }
  }

  public register(transaction: any) {

    this.transaction.postTransaction(transaction).subscribe(
      (resp) => {
        console.log("Succesfuly add")
      },
      (err) => {
        console.log(err);
      }
    );
  }





  public RegisterForm(){
    var transaction: { [k: string]: any } = {
      idDep: this.validateForm.value.idDep,
      borrowdate: this.validateForm.value.borrowdate = formatDate(this.validateForm.value.borrowdate, 'yyyy-MM-dd', 'en'),
      returndate: this.validateForm.value.returndate = formatDate(this.validateForm.value.returndate, 'yyyy-MM-dd', 'en'),
      isreturned: this.validateForm.value.isreturned,
      book: { bookId: this.validateForm.value.book }
    };
    if (this.validateForm.valid) {
      console.log('submit', transaction);
  this.register(transaction);
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
    var transaction: { [k: string]: any } = {
      id:this.validateForm.value.id,
      idDep: this.validateForm.value.idDep,
      borrowdate: this.validateForm.value.borrowdate = formatDate(this.validateForm.value.borrowdate, 'yyyy-MM-dd', 'en'),
      returndate: this.validateForm.value.returndate = formatDate(this.validateForm.value.returndate, 'yyyy-MM-dd', 'en'),
      isreturned: this.validateForm.value.isreturned,
      book: { bookId: this.validateForm.value.book }
    };

    if (this.validateForm.valid) {
      console.log('submit', transaction);
      this.updateTransaction(this.validateForm.value.id,transaction);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }

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

  selectedBook=null;

  setTransactionInfo(data2:any): void{
    console.log(data2);

    this.validateForm = this.fb.group({
      id:[data2.id],
      idDep:[data2.idDep],
      borrowdate: [data2.borrowdate],
      returndate: [data2.returndate],
      isreturned:[data2.isreturned],
      book: { bookId: data2.book.bookId },
    });
    this.selectedBook=data2.book.bookId;
   // this.validateForm.value.book=data2.book.bookId;
  //  book: { bookId: this.validateForm.value.book }
    this.validateForm.disable();
    this.formName="View Transaction Info"
    this.buttonname="OK"


    this.visible=true;

  }





  showTransaction(){

  }

  //borrowdate=null;
 // returndate=null;
  radioValue = 'false';

  datepickerformat='YYYY-MM-dd';


  addnewTransaction():void{

    this.validateForm = this.fb.group({
      idDep: [null, [Validators.required]],
      borrowdate: [ null,[Validators.required]],
      returndate:[ null,[Validators.required]],
      isreturned:[null, [Validators.required]],
      book:[null,[Validators.required]]
    });

    this.formName="Add new Transaction"
    this.buttonname="Register";
    this.visible=true;
  }

  public updateTransaction(id:any,transactiondata:any){
    this.transaction.updateTransaction(id,transactiondata).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  UpdateBookInfo(data:any):void{
    this.setTransactionInfo(data);

    this.formName="Update Transaction Info";
    this.buttonname="Update";
    this.validateForm.enable();
    this.visible=true;

  }


  handleOkTransactionModal(): void {
    console.log('Ok clicked!');
    this.updateVisibility(false);
  }

  handleCancelTransactionModal(): void {
    console.log('Cancel clicked!');
    this.updateVisibility(false);
  }


  SuccesNotify(type: string): void {
    this.notification.create(
      type, '' +
      'Successful',
      'The changes were successful'
    );
  }






}
