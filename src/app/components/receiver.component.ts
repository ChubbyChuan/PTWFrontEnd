import { Component, OnInit } from '@angular/core';
import { COMPANIES } from '../ModelandConstants/constant';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {

  companies = COMPANIES
  Form!: FormGroup


  ngOnInit(): void {



  }

  private createForm(){

  }


}
