import { Component, OnInit, ɵConsole } from '@angular/core';
import { AccountServiceService } from "../account-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  theAccount:any;
  message:any;
  constructor(private _service:AccountServiceService,private _router:Router) { }

  ngOnInit(): void{}

  public registerNow(val:any)
  {
    const theAccount =
    {
      "id":val.id,
      "name":val.name,
      "email":val.email,
      "city":val.city,
      "state":val.state,
      "pin_code":val.pin_code,
      "account_type":val.account_type,
      "balance":val.balance,
      "doc":val.doc,
      "status":val.status
    }
    console.log(val)
    let response = this._service.doRegisteration(theAccount);
    response.subscribe((res)=> {
      // this.message=res;
      // console.log("success")
      alert("Registeration Successful")
      this._router.navigate(['/hsbc'])
    })
  
  
  
  }

}
