import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NzTableModule} from "ng-zorro-antd/table";
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {BookComponent} from "./book/book.component";
import { NzIconModule } from 'ng-zorro-antd/icon';
import {NzFormModule} from "ng-zorro-antd/form";
import {WelcomeComponent} from "./pages/welcome/welcome.component";
import {TransactionComponent} from "./transaction/transaction.component";
import {TransactionPgComponent} from "./pages/transaction-pg/transaction-pg.component";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzButtonModule} from "ng-zorro-antd/button";
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import {TransactionFormComponent} from "./transaction-form/transaction-form.component";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {NzSelectModule} from "ng-zorro-antd/select";
import {WelcomeModule} from "./pages/welcome/welcome.module";


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    TransactionComponent,
    TransactionPgComponent,
    TransactionFormComponent
  ],
    imports: [
        BrowserModule,
        NzTableModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        IconsProviderModule,
        NzLayoutModule,
        NzMenuModule,
        NzIconModule,
        NzFormModule,
        ReactiveFormsModule,
        NzInputModule,
        NzDividerModule,
        NzButtonModule,
        NzPopconfirmModule,
        NzModalModule,
        NzDatePickerModule,
        NzRadioModule,
        NzSelectModule,
        WelcomeModule,

    ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
