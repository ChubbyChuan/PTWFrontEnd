import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, from } from "rxjs";
import { Approval, Permit, SearchQuery } from "../_ModelandConstants/model";


const URL_Update = 'http://localhost:8080/approval/update'
const URL_Cancel = 'http://localhost:8080/approval/cancel'
const URL_Close = 'http://localhost:8080/approval/close'

@Injectable()
export class ApprovalService {   

    constructor(private http: HttpClient) {}

    updateApproval(id: number,a: Approval): Observable<Permit[]> {
        return this.http.post<any>(`${URL_Update}/${id}`, a)
      }
   
    //Get Request: 'http://localhost:8080/approval/cancel/{{id}}
    cancelApproval(id: number): Observable<Permit[]> {
      return this.http.post<any>(`${URL_Cancel}/${id}`, id)
    }

     //Get Request: 'http://localhost:8080/approval/close/{{id}}
    closeApproval(id: number): Observable<Permit[]> {
      return this.http.post<any>(`${URL_Close}/${id}`, id)
    }
    

}