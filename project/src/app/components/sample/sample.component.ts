import {Component, DoCheck, OnInit} from '@angular/core';
import {Data} from '@angular/router';
import {ClassifierServiceService} from '../../services/classifier-service.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit, DoCheck{

  constructor(public cs: ClassifierServiceService) {
  }

  ngOnInit(): void {

  }

  startDate;
  endDate;
  duration = "";

  pp() {
    new Date().getDay();
  }

  ngDoCheck(): void {
    this.setStartDate(this.startDate, this.endDate);
  }

  setStartDate(StartDate: string, EndDate?: string) {
    if(this.endDate && this.startDate){
      this.startDate = new Date(StartDate).getTime();
      this.endDate = new Date(EndDate).getTime();
      let tarb = this.endDate - this.startDate;
      let orTarb = tarb / (60 * 60 * 24 * 1000);
      // alert(`tarb ${orTarb} or`);
      this.duration = `${orTarb} or`;
    }
    else if(StartDate){
      this.duration = StartDate;
    }
  }




  imp_statuses = this.cs.getClasssifier('1');


  // getDuration() {
  //   if (this.startDate == undefined && this.endDate == undefined) {
  //     alert(this.startDate.getDate());
  //     this.duration = new Date(this.startDate.getDate() - this.endDate.getDate());
  //   }
  // }

}
