import {Component, DoCheck, OnInit} from '@angular/core';
import {Data} from '@angular/router';
import {ClassifierServiceService} from '../../services/classifier-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit, DoCheck {

  constructor(public cs: ClassifierServiceService) {
  }

  ngOnInit(): void {
  }

  startDate;
  endDate;
  duration = '';

  ngDoCheck(): void {
    this.setStartDate(this.startDate, this.endDate);
  }

  setStartDate(StartDate: string, EndDate?: string) {
    if (this.endDate && this.startDate) {
      this.startDate = new Date(StartDate).getTime();
      this.endDate = new Date(EndDate).getTime();
      let tarb = this.endDate - this.startDate;
      let orTarb = tarb / (60 * 60 * 24 * 1000);
      // alert(`tarb ${orTarb} or`);
      this.duration = `${orTarb} or`;
    } else if (StartDate) {
      this.duration = StartDate;
    }
  }

  imp_statuses = this.cs.getClassifier('1');

  form1 = new FormGroup({
    projectCode: new FormControl("a", Validators.required),
    projectTitle: new FormControl("a", Validators.required),
    description: new FormControl("a"),
    implementationStatus: new FormControl(undefined, Validators.required),
    startDate: new FormControl(new Date(""), Validators.required),
    endDate: new FormControl(""),

  });

  onSubmit(){
    console.log(this.form1.value);
    console.log("aaaaaa");
  }

}
