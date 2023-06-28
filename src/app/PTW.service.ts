import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

const URL = 'http://localhost:8080/create'

@Injectable()
export class PTWService {   

    constructor(private http: HttpClient) {}

    createPTW(R: Request): Observable<any> {
      return this.http.post<any>(URL, R);
    }
  

}