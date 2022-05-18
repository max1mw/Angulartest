import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";




@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})


@Injectable({
  providedIn:'root'
})
export class TransactionComponent{


  constructor(private http:HttpClient) { }

 public getTransaction(){
    return this.http.get('/tasktest1/test2');
 }

 public deleteTransaction(id:any){
  return this.http.delete('/tasktest1/test2/'+id)
 }

 public updateTransaction(id:any,Transaction:any){
return this.http.put('tasktest1/test2/'+id,Transaction);
 }

 public postTransaction(Transaction:any){
      return this.http.post('tasktest1/test2/',Transaction)
 }


}
