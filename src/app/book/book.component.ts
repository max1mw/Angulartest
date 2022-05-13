import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

@Injectable({
  providedIn:'root'
})
export class BookComponent{

  constructor(private http:HttpClient) {
  }



  public getBook(){
    return this.http.get('/tasktest1/test1');
  }

  public deleteBook(id: any) {
    return this.http.delete('/tasktest1/test1/' + id);
  }

  public getByIdBook(id: any) {
    return this.http.get('/tasktest1/test1/id/' + id);
  }

  public postBook(BookData:any){
    return this.http.post('/tasktest1/test1/', BookData);

  }



}
