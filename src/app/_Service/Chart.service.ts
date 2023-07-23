import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import { Chart_Data_Donut } from "../_ModelandConstants/model";


const API_CHART_URL = "https://quickchart.io/chart?c="
const API_CHART_SIZE_URL = "https://quickchart.io/chart?width=300&height=300&c="

const URL_Chart_Type = 'http://localhost:8080/info/graphtype'
const URL_Chart_Location = 'http://localhost:8080/info/graphlocation'


@Injectable()
export class ChartService {

    constructor(private http: HttpClient) { }

    chartData: Chart_Data_Donut = {
        type: "donut",
        data: {
            labels: [""],
            datasets: [{
                data: [],
            }]
        },
        options: {
            plugins: {
                datalabels: {
                    backgroundColor: '#ccc',
                    borderRadius: 3,
                    font: {
                        size: 15,
                        color: 'black',
                        weight: 'bold',
                    },
                },
                doughnutlabel: {
                    labels:
                    {
                        text: 'null',
                        font: {
                            size: 30,
                            weight: 'bold',
                        },
                    },
                },
            },
        },
    };


    generateURL(response: any) {
        this.chartData.data.labels = response.type;
        this.chartData.data.datasets[0].data = response.data;
        const jsonString: string = JSON.stringify(this.chartData);
        const url: string = API_CHART_SIZE_URL + encodeURIComponent(jsonString)
        return url
    }

    getInfoType(type: String | null): Observable<any> {
        if (type == null) {
            type = 'all'
        }
        const url = `${URL_Chart_Type}/${type}`;
        return this.http.get<any>(url);
    }

    getInfoLocation(location: String | null): Observable<any> {
        if (location == null) {
            location = 'all'
        }
        const url = `${URL_Chart_Location}/${location}`;
        return this.http.get<any>(url);
    }

}