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


  URL: string = ''

  fb: FormBuilder = inject(FormBuilder)


  ngOnInit(): void {
    this.chartSvc.getInfoType("all").subscribe(
      (response: any) => {
        // Handle the response here
        console.log('Response from chart:', response);
        this.URL = this.chartSvc.generateURL(response)
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
        console.log('Response from get chart:', response);
        this.URL = this.chartSvc.generateURL(response)
      },
      (error: any) => {
        // Handle the error here
        console.error('Error occurred get chart:', error);
      }
    );
  }


}
