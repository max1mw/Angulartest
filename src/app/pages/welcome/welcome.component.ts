import {Component, Injectable, Input, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {provideRoutes} from "@angular/router";
import {BookComponent} from "../../book/book.component";
import {NzMessageService} from "ng-zorro-antd/message";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {AddformComponent} from "../../addform/addform.component";

interface Book {
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

  constructor(public bookComponent: BookComponent) {
    this.showBook();
  }

  bookDetails = null as any;


 public showBook(){
    this.bookComponent.getBook().subscribe(
      (resp)=>{
      console.log(resp)
        this.bookDetails=resp;},
      (err)=>{
        console.log(err)
      });
  }


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
