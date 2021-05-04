import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const SETTINGS_LOCATION = "assets/config/config.json";

@Injectable({
  providedIn: 'root'
})

export class AppsettingService<T> {

  constructor(private http: HttpClient) {
  }
  
  public getSetting(): Observable<T> {
    return this.http.get<T>(SETTINGS_LOCATION).pipe(
      catchError((error: HttpErrorResponse) => {
        return observableThrowError(error.error)
      }));
  }

}
