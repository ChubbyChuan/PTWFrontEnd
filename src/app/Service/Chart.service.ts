import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"

const API_CHART_URL = 'https://quickchart.io/chart'

const URL_Chart_Type = 'http://localhost:8080/info/graphtype'
const URL_Chart_Location = 'http://localhost:8080/info/graphlocation'


@Injectable()
export class ChartService {   

    constructor(private http: HttpClient) {}

    getInfoType(type: String| null): Observable<any> {
        if (type == null){
            type = 'all'
        }
        const url = `${URL_Chart_Type}/${type}`;
        return this.http.get<any>(url);
    }

    getInfoLocation(location: String| null): Observable<any> {
        if (location == null){
            location = 'all'
        }
        const url = `${URL_Chart_Location}/${location}`;
        return this.http.get<any>(url);
    }



}