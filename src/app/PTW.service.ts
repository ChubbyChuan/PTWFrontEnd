import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Permit, SearchQuery } from "./ModelandConstants/model";

const URL = 'http://localhost:8080/'
const URL_Create = 'http://localhost:8080/create'
const URL_Search = 'http://localhost:8080/search'
const URL_Update = 'http://localhost:8080/update'
const URL_Close = 'http://localhost:8080/close'

@Injectable()
export class PTWService {   

    constructor(private http: HttpClient) {}

    createPTW(R: Request): Observable<any> {
      return this.http.post<any>(URL_Create, R);
    }

    searchPTW(SQ: SearchQuery): Observable<Permit[]> {
      return this.http.post<Permit[]>(URL_Search, SQ)
    }

    searchPTWbyId(id: number): Observable<Permit> {
      const url = `${URL_Search}/${id}`; // Assuming URL_Search is the base URL for the API endpoint
      return this.http.get<Permit>(url);
    }
    
    updatePTW(id: number, R: Request): Observable<any> {
      return this.http.post<any>(`${URL_Update}/${id}`, R);
    }
    

    closePTW(id: number): Observable<Permit[]> {
      return this.http.post<any>(URL_Close, id)
    }
    

}