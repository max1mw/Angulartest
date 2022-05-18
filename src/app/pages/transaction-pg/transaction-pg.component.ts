import {Component, OnInit, ViewChild} from '@angular/core';
import {TransactionComponent} from "../../transaction/transaction.component";
import {TransactionFormComponent} from "../../transaction-form/transaction-form.component";
import {AddformComponent} from "../../addform/addform.component";
import {WelcomeComponent} from "../welcome/welcome.component";


interface Transaction {
  idDep: number;
  borrowdate: Date;
  returndate: Date;
  isreturnet: boolean;
  booktitle:string;
}


@Component({
  selector: 'app-transaction-pg',
  templateUrl: './transaction-pg.component.html',
  styleUrls: ['./transaction-pg.component.css']
})
export class TransactionPgComponent {

  visible=false;

  constructor(public transaction:TransactionComponent,public wel:WelcomeComponent) {
    this.showTransaction();
    wel.showBook();

  }



  listOfColumn = [
    {
      title: 'idDep',
      compare: (a: Transaction, b: Transaction) => a.idDep - b.idDep,
      priority: false
    },
    {
      title: 'borrowdate',
     // this.data.sort((a, b) => new Date(b.date1).getTime() - new Date(a.date1).getTime());
      compare: (a: Transaction, b: Transaction) => new Date(a.borrowdate).getTime()-new Date(b.borrowdate).getTime(),
      priority: 3
    },
    {
      title: 'returndate',
      compare: (a: Transaction, b: Transaction) => new Date(a.returndate).getTime()-new Date(b.returndate).getTime(),
      priority: 2
    },
    {
      title: 'isreturned',
     // compare: (a: Transaction, b: Transaction) => Number(a) - Number(b),
      compare:null,
      priority: 1
    },
    {
      title: 'Book Title',
      //compare: (a: Transaction, b: Transaction) => a.booktitle.localeCompare(b.booktitle),
      compare:null,
      priority: 1
    },
    {
      title: 'Action',
      compare: null,
      priority: false
    }
  ];

  transactiondetail=null as any;


  @ViewChild(WelcomeComponent, { static: true }) child3: WelcomeComponent | undefined;
  public showTransaction(){

    this.transaction.getTransaction().subscribe(
      (resp)=>{
        console.log(resp)
        this.transactiondetail=resp;},
      (err)=>{
        console.log(err)
      });
  }

  public deleteTransaction(data: any) {
    this.transaction.deleteTransaction(data.id).subscribe(
      (resp) => {
        this.showTransaction();
      },
      (err) => {
        console.log(err);
      }
    );
    console.log('Ok clicked!');
  }


  @ViewChild(AddformComponent, { static: true }) child: AddformComponent | undefined;

  BookInfoModal(data : any): void {
    this.child?.setBookInfo(data);
  }




  @ViewChild(TransactionFormComponent, { static: true }) child2: TransactionFormComponent | undefined;

  NewTransactionModal():void{
    this.child2?.addnewTransaction();
  }

  showTransactionInfo(data : any): void {
    this.child2?.setTransactionInfo(data);
  }

UpdateTransactioninfo(data:any):void{
    this.child2?.UpdateBookInfo(data);
}


  updateVisibility(visibility: boolean) {
    this.visible = visibility;
  }

  submit(submited: boolean) {
    if (submited) {
      this.showTransaction();
      this.visible = false;
    }
  }




}
