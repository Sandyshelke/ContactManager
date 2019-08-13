import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, Router } from "@angular/router";
import { ContactService } from 'src/app/shared/services/contact.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  editContactForm: FormGroup;
  contactId: number;

  constructor(
    private _actRoutes: ActivatedRoute,
    private _route: Router,
    private _comServ: CommonService,
    private _contService: ContactService
  ) { }

  ngOnInit() {
    this.editContactForm = new FormGroup({
      FirstName: new FormControl("", [Validators.required, Validators.minLength(2)]),
      LastName: new FormControl("", [Validators.required, Validators.minLength(2)]),
      Email: new FormControl("", [Validators.required, Validators.email]),
      PhoneNumber: new FormControl("", [Validators.required, Validators.minLength(10)]),
      Status: new FormControl(false)
    })
    this._actRoutes.params.subscribe(params => this.contactId = params["id"]);
    this.getContactDetail();
  }

  getContactDetail() {
    this._contService.GetContactById(this.contactId)
      .subscribe(
        (contDetails: IContact) => this.editContactForm.patchValue(contDetails),
        (error: IErrorResponse) => this._comServ.showError(error.ErrorMessage)
      )
  }

  UpdateContactDetails() {
    this._contService.UpdateContact(this.editContactForm.value, this.contactId)
      .subscribe(
        (response: IContact) => {
          this._comServ.showSuccess("Contact " + response.FirstName + " " + response.LastName + " updated"),
          this._route.navigate(['/contact/all'])
        },
      (error: IErrorResponse) => this._comServ.showError(error.ErrorMessage)
      )
  }


}
