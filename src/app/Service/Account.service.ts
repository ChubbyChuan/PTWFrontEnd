import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User, User_Registeration } from "../ModelandConstants/model";
import { Observable } from "rxjs";

const User_Register = 'http://localhost:8080/user/register'
const User_Verify = 'http://localhost:8080/user/verify'


@Injectable()
export class AccountService {
    isUserValid: boolean = false;
    constructor(private http: HttpClient) {}
    
    registerUser(user: User_Registeration): Observable<any>{
        return this.http.post<any>(User_Register, user)
    }

    verifyUser(user: User): Observable<any>{
        return this.http.post<boolean>(User_Verify, user)
    }
    
    updateUserValidity(isValid: boolean): void {
        this.isUserValid = isValid;
      }
    




}