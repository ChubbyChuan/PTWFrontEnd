import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"

const API_CHART_URL = 'https://quickchart.io/chart'



@Injectable()
export class ChartService {   

    constructor(private http: HttpClient) {}



    // generateChart(c: Config): Observable<any>{
    //     return this.http.get<any>(API_CHART_URL, c);
    // }



}