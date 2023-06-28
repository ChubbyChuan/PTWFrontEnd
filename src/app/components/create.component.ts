import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { COLD_ICON, CONFINED_ICON, HOT_ICON } from '../ModelandConstants/iconConstant';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { COMPANIES, LOCATIONS, OPTIONS } from '../ModelandConstants/constant';
import { Observable } from 'rxjs/internal/Observable';
import { map, startWith } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { HttpClient } from "@angular/common/http";
import { PTWService } from '../PTW.service';

//SVG link
const hot = HOT_ICON
const cold = COLD_ICON
const confined = CONFINED_ICON



//variable


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  // bring in the constants
  options = OPTIONS
  locations = LOCATIONS


  //FormControl for autocomplete
  typeControl = new FormControl('hot', [Validators.required, Validators.minLength(1)])
  companyControl = new FormControl('GSK', [Validators.required, Validators.minLength(1)])
  locationControl = new FormControl('Production', [Validators.required, Validators.minLength(1)])


  //implementing observables
  filteredOptions!: Observable<string[]> //input company name
  filteredLocations!: Observable<string[]> //input location name

  // @Autowire inject >= v14
  fb: FormBuilder = inject(FormBuilder)
  iconRegistry: MatIconRegistry = inject(MatIconRegistry)
  sanitizer: DomSanitizer = inject(DomSanitizer)
  // constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  //   iconRegistry.addSvgIconLiteral('hot', sanitizer.bypassSecurityTrustHtml(hot))
  //   iconRegistry.addSvgIconLiteral('cold', sanitizer.bypassSecurityTrustHtml(cold))
  //   iconRegistry.addSvgIconLiteral('confined', sanitizer.bypassSecurityTrustHtml(confined))
  // }
  ptwSvc = inject(PTWService)


  //form
  Form!: FormGroup

  //variable



  ngOnInit(): void {

    //linking the svg file to the respective tag in html
    this.iconRegistry.addSvgIconLiteral('hot', this.sanitizer.bypassSecurityTrustHtml(hot))
    this.iconRegistry.addSvgIconLiteral('cold', this.sanitizer.bypassSecurityTrustHtml(cold))
    this.iconRegistry.addSvgIconLiteral('confined', this.sanitizer.bypassSecurityTrustHtml(confined))
    
    // linking the company name input observable to companyControlgroup. If there is any changes, it will be process as lowercase to match  
    this.filteredOptions = this.companyControl.valueChanges.pipe(
      startWith(''),
      map(value => this._optionfilter(value || '')),
    );
    this.filteredLocations = this.locationControl.valueChanges.pipe(
      startWith(''),
      map(value => this._locationfilter(value || '')),
    );
    // instantitae the form with the formbuilder
    this.Form = this.createFormWithFormBuilder();
  }

  invalidForm() {
    return this.Form.invalid
  }
  
  selectType(category: string){
    this.typeControl.setValue(category)
    console.log(this.typeControl)
  }

  submitRequest(){
    const request: Request = this.Form.value
        console.info('>> processing form: ', request)
        this.ptwSvc.createPTW(request).subscribe(
          response => {
            console.log('Response from server:', response)
            // Handle the response here
            const newPermitId = response as string;
            console.log('New Permit ID:', newPermitId);

          },
          error => {
            console.error('Error occurred:', error);
            // Handle the error here
           
          }
        )
  } 

  


/*-------------------------------------------------------*/
  // to provide function to change everything to lower case
  private _optionfilter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  private _locationfilter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.locations.filter(location => location.toLowerCase().includes(filterValue));
  }

  //formbuilder
  private createFormWithFormBuilder(): FormGroup {
    const datePipe = new DatePipe('en-US')
    // const defaultDate = datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm') //default date is today
    const defaultDate = datePipe.transform(new Date(), 'dd-MM-yyyyTHH:mm') //default date is today

    return this.fb.group({
      type: this.typeControl,
      name: this.fb.control<string>('Wee Chuan', [Validators.required, Validators.minLength(3)]),
      company: this.companyControl,
      startdate: [defaultDate],
      enddate: [defaultDate],
      location: this.locationControl,
      comment: this.fb.control<string>('No Comment')
    })
  }
}