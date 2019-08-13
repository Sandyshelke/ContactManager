import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private baseURL: string = "https://contactmanagerbe.azurewebsites.net/api/Contact";
  constructor(
    private _toastrServ: ToastrService
  ) { }

  get BaseURL(): string {
    return this.baseURL;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  showError(errorMessage) {
    this._toastrServ.error(errorMessage);
  }

  showSuccess(sucMessage) {
    this._toastrServ.success(sucMessage);
  }

  handleServiceError(error) {
    //check error thrown from server else throw custom error.
    if (error.Message !== undefined){
      return throwError({
        ErrorId: '',
        ErrorMessage: error.Message
      });
    }
    if (<IErrorResponse>error.ErrorId !== undefined)
      return throwError(error); 
    else
      return throwError({
        ErrorId: '',
        ErrorMessage: 'Something went wrong',
      });
  }
}
