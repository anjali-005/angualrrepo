import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from "../account-service.service";
@Component({
  selector: 'app-all-accounts',
  templateUrl: './all-accounts.component.html',
  styleUrls: ['./all-accounts.component.css']
})
export class AllAccountsComponent implements OnInit {
  p:number=1;
  term:string="";
  accounts:any=[];  
  constructor(private _service :AccountServiceService)  { }

  ngOnInit():void
  {
    let response =this._service.getAllAccounts();
    response.subscribe(data => this.accounts=data)
  }

}
