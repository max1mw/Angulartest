import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface DataItem {
  name: string;
  age: number;
  street: string;
  building: string;
  number: number;
  companyAddress: string;
  companyName: string;
  gender: string;
}

@Component({
  selector: 'app-testtablitza',
  templateUrl: './testtablitza.component.html'
})
export class TesttablitzaComponent implements OnInit {
  listOfData: DataItem[] = [];
  sortAgeFn = (a: DataItem, b: DataItem): number => a.age - b.age;
  nameFilterFn = (list: string[], item: DataItem): boolean => list.some(name => item.name.indexOf(name) !== -1);
  filterName = [
    { text: 'Joe', value: 'Joe' },
    { text: 'John', value: 'John' }
  ];
  ngOnInit(): void {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        name: 'John Brown',
        age: i + 1,
        street: 'Lake Park',
        building: 'C',
        number: 2035,
        companyAddress: 'Lake Street 42',
        companyName: 'SoftLake Co',
        gender: 'M'
      });
    }
    this.listOfData = data;
  }

  // bookDetails = null as any;
  // constructor(private http:HttpClient) {
  // }
  //
  //
  // public getBook(){
  //   return this.http.get('/tasktest1/test1');
  // }
  //
  //
  //
  // getBookDetails()
  // {
  //   this.getBook().subscribe(
  //     (resp)=>{
  //       console.log(resp);
  //       this.bookDetails=resp;
  //     },(err)=>{
  //       console.log(err);
  //     }
  //   );
  // }

}
