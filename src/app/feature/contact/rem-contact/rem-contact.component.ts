import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery'
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';
import { ContactService } from 'src/app/shared/services/contact.service';
declare var $: $

@Component({
  selector: 'app-rem-contact',
  templateUrl: './rem-contact.component.html',
  styleUrls: ['./rem-contact.component.css']
})
export class RemContactComponent implements OnInit, AfterViewInit {
  contactId: any;

  constructor(
    private _route: Router,
    private _actRoutes: ActivatedRoute,
    private _comServ: CommonService,
    private _contService: ContactService
  ) { }

  ngOnInit() {
    this._actRoutes.params.subscribe(params => this.contactId = params["id"]);
  }

  ngAfterViewInit(): void {
    $("#exampleModalCenter").modal('show');
  }

  DeleteContact() {
    this._contService.RemoveContact(this.contactId)
      .subscribe(
        (contDetails: IContact) =>{
          $("#exampleModalCenter").modal('hide');
          this._route.navigate(['/contact/all'])
          this._comServ.showSuccess("Deleted successfully")
        },
        (error: IErrorResponse) => this._comServ.showError(error.ErrorMessage)
      )
  }

}
