import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AllAccountsComponent } from './all-accounts/all-accounts.component';
import { RegisterComponent } from './register/register.component';
import { HsbcComponent } from './hsbc/hsbc.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositComponent } from './deposit/deposit.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path:"", redirectTo:"hsbc",pathMatch:"full"
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"hsbc",component:HsbcComponent
  },
  {
    path:"all-accounts",component:AllAccountsComponent
  },
  {
    path:"search" ,component: SearchComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"withdraw" , component:WithdrawComponent
  },
  {
    path:"deposit",component:DepositComponent
  },
  {
    path:"search/edit/:id",component:EditComponent
  },
  {
    path:"**",component:HsbcComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
