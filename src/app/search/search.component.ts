import { Component, OnInit,TemplateRef} from '@angular/core';
import {  AccountServiceService  } from "../account-service.service";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  modalRef: any;
  id:number=0;
  account:any;
  
  constructor(private _service:AccountServiceService,private modalService: BsModalService) { }

  ngOnInit(): void {}
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public findById()
  {
    let response = this._service.getAccountById(this.id)
    response.subscribe(data => this.account = data)
  }

  
}
