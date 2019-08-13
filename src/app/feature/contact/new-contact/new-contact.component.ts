import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from 'src/app/shared/services/contact.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  newContactForm: FormGroup;
  response: any;

  constructor(
    private _contactServ: ContactService,
    private _comServ: CommonService,
    private _route: Router,
  ) { }

  ngOnInit() {
    this.newContactForm = new FormGroup({
      FirstName: new FormControl("", [Validators.required, Validators.minLength(2)]),
      LastName: new FormControl("", [Validators.required, Validators.minLength(2)]),
      Email: new FormControl("", [Validators.required, Validators.email]),
      PhoneNumber: new FormControl("", [Validators.required, Validators.minLength(10)]),
      Status: new FormControl(false)

    })
  }

  CreateNewContact() {
    console.log(this.newContactForm);
    this._contactServ.CreateContact(this.newContactForm.value)
      .subscribe(
        (response: IContact) =>{
          this._comServ.showSuccess("New contact " + response.FirstName +" " +response.LastName + " created")
          this._route.navigate(['/contact/all']);
        } ,
        (error: IErrorResponse) => {
          this._comServ.showError(error.ErrorMessage)
        }
      )
  }

}
