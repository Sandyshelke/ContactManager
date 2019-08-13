import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private _httpClient: HttpClient,
    private _commonServ: CommonService
  ) { }

  GetContactList(): Observable<Array<IContact>> {
    return this._httpClient.get(this._commonServ.BaseURL)
      .pipe(
        map((list: Array<IContact>) => list = list),
        catchError((error:any)=>  this._commonServ.handleServiceError(error))
      )
  }

  GetContactById(contactId) {
    return this._httpClient.get(this._commonServ.BaseURL+ "/"+ contactId)
    .pipe(
      map((list: IContact) => list = list),
      catchError((error:any)=>  this._commonServ.handleServiceError(error))
    )
  }

  CreateContact(contactDetails: IContact): Observable<IContact | IErrorResponse> {
    return this._httpClient.post(this._commonServ.BaseURL, contactDetails)
      .pipe(
        map((contResp: IContact) => contResp = contResp),
        catchError((error:any)=>  this._commonServ.handleServiceError(error))
      )
  }

  UpdateContact(contactDetails: IContact, contactId: number): Observable<IContact> {
    return this._httpClient.put(this._commonServ.BaseURL + "/" + contactId, contactDetails)
      .pipe(
        map((contResp: IContact) => contResp = contResp),
        catchError((error:any)=>  this._commonServ.handleServiceError(error))
      )
  }

  RemoveContact(contactId: string): Observable<IContact> {
    return this._httpClient.delete(this._commonServ.BaseURL + "/" + contactId)
      .pipe(
        map((list: IContact) => list = list)
      )
  }
}
