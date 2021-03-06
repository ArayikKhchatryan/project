import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Data} from '@angular/router';
import {ClassifierServiceService} from '../../services/classifier-service.service';
import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit, DoCheck, OnChanges {

  constructor(public cs: ClassifierServiceService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }


  startDate;
  endDate;
  duration = '';


  ngDoCheck(): void {
    this.setStartDate(this.startDate, this.endDate);
  }
  //
  // setStartDate(StartDate: string, EndDate?: string) {
  //   if (this.endDate && this.startDate) {
  //     this.startDate = new Date(StartDate).getTime();
  //     this.endDate = new Date(EndDate).getTime();
  //     let tarb = this.endDate - this.startDate;
  //     let orTarb = tarb / (60 * 60 * 24 * 1000);
  //     // alert(`tarb ${orTarb} or`);
  //     this.duration = `${orTarb} day`;
  //   } else if (StartDate) {
  //     this.duration = StartDate;
  //   }
  // }

  setStartDate(StartDate, EndDate?) {
    if (StartDate && EndDate) {
      StartDate = new Date(this.startDate).getTime();
      EndDate = new Date(this.endDate).getTime();
      let tarb = EndDate - StartDate;
      let orTarb = tarb / (60 * 60 * 24 * 1000);
      // alert(`tarb ${orTarb} or`);
      this.duration = `${orTarb} day`;
    } else if (StartDate) {
      this.duration = StartDate;
    }
  }


  imp_statuses = this.cs.getClassifier('1');

  form1 = new FormGroup({
    // projectCode: new FormControl('', [Validators.required, Validators.nullValidator({})]),
    projectCode: new FormControl('', [Validators.required]),
    projectTitle: new FormControl('', Validators.required),
    description: new FormControl(''),
    implementationStatus: new FormControl(0, [Validators.required, Validators.min(1)]),
    startDate: new FormControl(new Date(''), Validators.required),
    endDate: new FormControl(''),
  });


  onSubmit() {
    console.log(this.form1.value);
  }

}
