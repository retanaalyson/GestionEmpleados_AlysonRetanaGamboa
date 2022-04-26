import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ConsultasService {
  public uri = "http://localhost:3000/";
  constructor(
    private http: HttpClient
  ) { }

  public cargar() {
    console.log("----------------")
    const x =  this.http.get(`${this.uri + '/insertEmploy'}`)
    return "x";
  }

}
