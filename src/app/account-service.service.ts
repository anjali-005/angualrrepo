import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import { IAccount } from './Account';
//import { Account } from './Account';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  
  constructor(private _http:HttpClient) { }
  public doRegisteration(theAccount:any)
  {
    return this._http.post("http://localhost:7070/save-account",theAccount,{responseType:"text" as "json"});
  }

  public getAllAccounts()
  {
    return this._http.get("http://localhost:7070/accounts");
  }

  public getAccountById(id:number)
  {
    return this._http.get<IAccount>("http://localhost:7070/search/"+id)
  }

  public updateAccount(theAccount:any)
  {
    return this._http.put("http://localhost:7070/updateaccount",theAccount)
  }

 
}
