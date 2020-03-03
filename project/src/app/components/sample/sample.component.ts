import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

  s(d: Date){
    alert(d.valueOf());
    let p = new Date(d);
    alert(p);
  };

  startDate: Date;
  endDate: Date;
  duration: Date;

  setStartDate(startDate) {
    this.startDate = startDate;
  }

  setEndDate(endDate) {
    this.endDate = endDate;
  }

  // getDuration() {
  //   if (this.startDate == undefined && this.endDate == undefined) {
  //     alert(this.startDate.getDate());
  //     this.duration = new Date(this.startDate.getDate() - this.endDate.getDate());
  //   }
  // }

}
