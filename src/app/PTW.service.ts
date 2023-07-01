import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Permit, SearchQuery } from "./ModelandConstants/model";

const URL_Create = 'http://localhost:8080/create'
const URL_Search = 'http://localhost:8080/search'

@Injectable()
export class PTWService {   

    constructor(private http: HttpClient) {}

    createPTW(R: Request): Observable<any> {
      return this.http.post<any>(URL_Create, R);
    }

    searchPTW(SQ: SearchQuery): Observable<Permit[]> {
      return this.http.post<Permit[]>(URL_Search, SQ)
    }
  

}