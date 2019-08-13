import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/shared/services/contact.service';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.component.html',
  styleUrls: ['./detail-contact.component.css']
})
export class DetailContactComponent implements OnInit {

  contactList: Array<IContact>;
  searchKeyWord:string;
  isResultLoaded:boolean= false;

  constructor(
    private _contactServ: ContactService,
    private _comServ: CommonService
  ) { }

  ngOnInit() {
    this.GetAllContacts();
  }

  GetAllContacts() {
    this.isResultLoaded = false;
    this._contactServ.GetContactList()
      .subscribe(
        response =>{
          this.isResultLoaded= true;
          this.contactList = response;
        },
       (error: IErrorResponse) => {
          this.isResultLoaded= true;
          this._comServ.showError(error.ErrorMessage)
        }
      )
  }
}
