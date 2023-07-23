import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Permit, SearchQuery } from "../_ModelandConstants/model";

const URL_Create = 'http://localhost:8080/permit/create'
const URL_Search = 'http://localhost:8080/permit/search'
const URL_Update = 'http://localhost:8080/permit/update'
const URL_Cancel = 'http://localhost:8080/permit/cancel'
const URL_Close = 'http://localhost:8080/permit/close'

@Injectable()
export class PTWService {   

    constructor(private http: HttpClient) {}

    createPTW(R: Request): Observable<any> {
      return this.http.post<any>(URL_Create, R);
    }


    //Get Request: 'http://localhost:8080/permit/search?type=<type>&locations=<locations>&status=<status>
    searchPTW(SQ: SearchQuery): Observable<Permit[]> {
      const params = new HttpParams()
        .set('type', SQ.type)
        .set('locations', SQ.locations)
        .set('status', SQ.status);
    
      return this.http.get<Permit[]>(URL_Search, { params });
    }

    //Get Request: 'http://localhost:8080/permit/search/{{id}}
    searchPTWbyId(id: number): Observable<Permit> {
      const url = `${URL_Search}/${id}`; // Assuming URL_Search is the base URL for the API endpoint
      return this.http.get<Permit>(url);
    }
    
    //Get Request: 'http://localhost:8080/permit/update/{{id}}
    updatePTW(id: number, R: Request): Observable<any> {
      return this.http.post<any>(`${URL_Update}/${id}`, R);
    }
    
    //Get Request: 'http://localhost:8080/permit/cancel/{{id}}
    cancelPTW(id: number): Observable<Permit[]> {
      return this.http.post<any>(`${URL_Cancel}/${id}`, id)
    }

     //Get Request: 'http://localhost:8080/permit/close/{{id}}
    closePTW(id: number): Observable<Permit[]> {
      return this.http.post<any>(`${URL_Close}/${id}`, id)
    }
    

}