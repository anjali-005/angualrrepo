import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule  } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { AllAccountsComponent } from './all-accounts/all-accounts.component';
import { RegisterComponent } from './register/register.component';
import { HsbcComponent } from './hsbc/hsbc.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositComponent } from './deposit/deposit.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    AllAccountsComponent,
    RegisterComponent,
    HsbcComponent,
    WithdrawComponent,
    DepositComponent,
    LoginComponent,
    EditComponent,
    EmployeeloginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
