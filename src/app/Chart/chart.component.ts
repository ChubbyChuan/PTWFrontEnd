import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})



export class ChartComponent implements OnInit {

//Chart formGroup for search
ChartForm!: FormGroup
locationControl = new FormControl<String>('')
locationArray!: FormArray
typeArray!: FormArray


fb: FormBuilder = inject(FormBuilder)


ngOnInit(): void {
  this.ChartForm = this.createChartForm()
}

addLocation() {
  this.locationArray.push(this.locationControl);
  this.locationControl.reset
}

removeLocation(index: number) {
  this.locationArray.removeAt(index);
}


private createChartForm(): FormGroup {
  return this.fb.group({
    type: this.typeArray,
    locations: this.locationArray,
    status: new FormControl<String>('')
  })
}

}
