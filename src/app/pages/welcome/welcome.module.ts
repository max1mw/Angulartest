import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {CommonModule} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {NzInputModule} from "ng-zorro-antd/input";
import {NzModalModule} from "ng-zorro-antd/modal";
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzFormModule } from 'ng-zorro-antd/form';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {AddformComponent} from "../../addform/addform.component";




@NgModule({
  imports: [WelcomeRoutingModule, NzTableModule, NzDividerModule,
    CommonModule, NzButtonModule, NzIconModule, NzInputModule, NzModalModule, NzPopconfirmModule,
    NzFormModule, ReactiveFormsModule, FormsModule, NzRadioModule],
  declarations: [WelcomeComponent, AddformComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule {

}
