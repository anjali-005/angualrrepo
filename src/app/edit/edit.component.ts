import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountServiceService } from '../account-service.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 

  id:number=0;
  accountObj:any;
  constructor(private _ActRoute:ActivatedRoute,private _accountser:AccountServiceService,private _route:Router) { }

  ngOnInit(): void 
  {
      this._ActRoute.paramMap.subscribe((param)=>{
        this.id=Number(param.get('id'));
        console.log(this.id);
      });

      this._accountser.getAccountById(this.id).subscribe((res)=>{
      this.accountObj={...res}
      console.log(this.accountObj);
      })
  }
  sendData(val:any)
  {
      const accountObj=
      {
        id:this.id,
        name:val.name,
        email:val.email,
        city:val.city,
        state:val.state,
        pin_code:val.pin_code,
        account_type:val.account_type,
        balance:val.balance,
        doc:val.doc,
        status:val.status
      }
      this._accountser.updateAccount(accountObj).subscribe(()=>{
        alert("Data Updated Successfully")
        this._route.navigate(['/search'])
      })
  }

}
