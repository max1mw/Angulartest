import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TesttablitzaComponent } from './testtablitza/testtablitza.component';
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



registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TesttablitzaComponent,
    BookComponent,
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
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  exports: [
    TesttablitzaComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
