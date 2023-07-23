import { Component, OnInit, inject } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, startWith, map } from 'rxjs';
import { HOT_ICON, COLD_ICON, CONFINED_ICON } from '../_ModelandConstants/iconConstant';
import { PPE, PRECAUTION, Permit, SearchQuery } from '../_ModelandConstants/model';
import { PTWService } from '../_Service/PTW.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { Work_Area } from '../_ModelandConstants/model';
import { PPE_LIST, PRECAUTION_LIST, WORK_AREA_LIST } from '../_ModelandConstants/constant';


//SVG link
const hot = HOT_ICON
const cold = COLD_ICON
const confined = CONFINED_ICON




@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})

export class ApprovalComponent implements OnInit{
  
  // List for Workarea, PPE and etc for HTML
  work_area_list: Work_Area[] = WORK_AREA_LIST
  PPE_list: PPE[] = PPE_LIST
  precaution_list: PRECAUTION[] = PRECAUTION_LIST
  

  

  //FormControl for searches (pending, approved, closed, cancelled)
  statusSearchControl = new FormControl('pending')


  // @Autowire inject >= v14
  fb: FormBuilder = inject(FormBuilder)
  iconRegistry: MatIconRegistry = inject(MatIconRegistry)
  sanitizer: DomSanitizer = inject(DomSanitizer)

  ptwSvc = inject(PTWService)


  //form
  Form!: FormGroup
  pendingGroup!: FormGroup
  approvedGroup!: FormGroup

  //variable + Observable
  Response!: String
  pendingpermits$!: Observable<Permit[]>
  approvedpermits$!: Observable<Permit[]>

  ngOnInit(): void {


    //linking the svg file to the respective tag in html
    this.iconRegistry.addSvgIconLiteral('hot', this.sanitizer.bypassSecurityTrustHtml(hot))
    this.iconRegistry.addSvgIconLiteral('cold', this.sanitizer.bypassSecurityTrustHtml(cold))
    this.iconRegistry.addSvgIconLiteral('confined', this.sanitizer.bypassSecurityTrustHtml(confined))

    // instantitae the form with the formbuilder

    this.pendingGroup = this.createFormSearch()
    this.pendingpermits$ = this.ptwSvc.searchPTW(this.pendingGroup.value)
    this.approvedGroup = this.createFormSearch()
    this.approvedpermits$ = this.ptwSvc.searchPTW(this.pendingGroup.value)

  }

  invalidForm() {
    return this.Form.invalid
  }

  /*----------------------------------------------*/
  /*---Search for pending. approved and pending---*/
  /*----------------------------------------------*/

  pendingSearch() {
    this.statusSearchControl.setValue("pending")

    const searchQuery: SearchQuery = this.pendingGroup.value
    console.info('>> Pending search form: ', searchQuery)
    this.pendingpermits$! = new Observable<Permit[]>((subscriber) => {
      const subscription = this.ptwSvc.searchPTW(searchQuery).subscribe(
        (permits: Permit[]) => {
          subscriber.next(permits);
          subscriber.complete();
        },
        (error: any) => {
          subscriber.error(error);
        })

      return () => {
        subscription.unsubscribe();
      }
    })
  }

  approved(id : Number) {
    console.info('>> approved Entry id: ', id)  
  }

  reject(id : Number) {
    console.info('>> reject Entry id: ', id)
  }


  approvedSearch() {
    this.statusSearchControl.setValue("approved")

    const searchQuery: SearchQuery = this.approvedGroup.value
    console.info('>> Approved search form: ', searchQuery)
    this.approvedpermits$! = new Observable<Permit[]>((subscriber) => {
      const subscription = this.ptwSvc.searchPTW(searchQuery).subscribe(
        (permits: Permit[]) => {
          subscriber.next(permits);
          subscriber.complete();
        },
        (error: any) => {
          subscriber.error(error);
        })

      return () => {
        subscription.unsubscribe();
      }
    })
  }

  /*-------------------------------------------------------*/

  //formbuilder
  private createFormSearch(): FormGroup {
    return this.fb.group({
      type: this.fb.control<string>(''),
      locations: this.fb.control<string>('Production'),
      status: this.statusSearchControl
    })
  }


}
