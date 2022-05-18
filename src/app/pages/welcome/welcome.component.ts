import {Component, Injectable, Input, OnInit, Output, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {provideRoutes} from "@angular/router";
import {BookComponent} from "../../book/book.component";
import {NzMessageService} from "ng-zorro-antd/message";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {AddformComponent} from "../../addform/addform.component";

interface Book {
  bookId:number;
   title: string;
   price: number;
   nbPages: number;
   description: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

@Injectable({providedIn:'root'})
export class WelcomeComponent {

  visible=false;
  title:string='';

  constructor(public bookComponent: BookComponent,
              ) {
    this.showBook();
  }


//bookDetails:Book=[];
  bookDetails=null as any;

//   this.apartmentService.getApartments()
// .subscribe(apartments => this.apartments = apartments);
 @Input() listOfdata:Book[]=[]

 public showBook(){
    this.bookComponent.getBook()
      .subscribe((resp)=>{
          console.log(resp)
          this.bookDetails=resp;
this.listOfdata=this.bookDetails;


        },
        (err)=>{
          console.log(err)
        });
  }

  ;





  // public showBook(bookdet:Book[]):void{
  //
  //   this.bookComponent.getBook()
  //     .subscribe((this.bookdet)=>{this.bookDetails=this.bookdet});
  // }


  public deleteBook(data: any) {
    this.bookComponent.deleteBook(data.bookId).subscribe(
      (resp) => {
        this.showBook();
      },
      (err) => {
        console.log(err);
      }
    );
    console.log('Ok clicked!');
  }




  listOfColumn = [
    {
      title: 'Title',
      compare: (a: Book, b: Book) => a.title.localeCompare(b.title),
      priority: false
    },
    {
      title: 'Price',
      compare: (a: Book, b: Book) => a.price - b.price,
      priority: 3
    },
    {
      title: 'NbPages',
      compare: (a: Book, b: Book) => a.nbPages - b.nbPages,
      priority: 2
    },
    {
      title: 'Description',
      compare: (a: Book, b: Book) => a.description.localeCompare(b.description),
      priority: 1
    },
    {
      title: 'Action',
      compare: null,
      priority: false
    }
  ];


  @ViewChild(AddformComponent, { static: true }) child: AddformComponent | undefined;

  BookInfoModal(data : any): void {
this.child?.setBookInfo(data);
  }

  NewBookModal():void{

   this.child?.addnewBook();


  }

  UpdateBookModal(data:any):void{
    this.child?.UpdateBookInfo(data);
  }

//   FindBookByTitle(data:any):void{
// this.child?.FindByTitleForm(data);
//
//   }
//

  public FindBookByTitle(data:any){
   // this.bookDetails=null;
    this.bookComponent.findBookBytitle(data).subscribe(
      (resp)=>{
        console.log(resp)
        this.listOfdata=[];
        this.bookDetails=resp;
        this.listOfdata.push(this.bookDetails);

        },
      (err)=>{
        console.log(err)
      });
  }






  updateVisibility(visibility: boolean) {
    this.visible = visibility;
  }

  submit(submited: boolean) {
    if (submited) {
      this.showBook();
      this.visible = false;
    }
  }





}
