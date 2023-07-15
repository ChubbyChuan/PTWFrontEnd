import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ChartService } from '../Service/Chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})



export class ChartComponent implements OnInit {

  chartSvc = inject(ChartService)


  //Chart formGroup for search
  ChartForm!: FormGroup
  locationControl = new FormControl<String>('')
  typeArray!: FormArray

  URL:string = "https://quickchart.io/chart?c={type:'bar',data:{labels:[2012,2013,2014,2015, 2016],datasets:[{label:'Users',data:[120,60,50,180,120]}]}}"

  fb: FormBuilder = inject(FormBuilder)


  ngOnInit(): void {
    this.chartSvc.getInfoType("all").subscribe(
      (response: any) => {
        // Handle the response here
        console.log('Response from chart:', response);

      },
      (error: any) => {
        // Handle the error here
        console.error('Error occurred during chart:', error);
      }
    )
  }

  getChart() {
    this.chartSvc.getInfoLocation(this.locationControl.value).subscribe(
      (response: any) => {
        // Handle the response here
        console.log('Response from chart:', response);

      },
      (error: any) => {
        // Handle the error here
        console.error('Error occurred during chart:', error);
      }
    );
  }



}
