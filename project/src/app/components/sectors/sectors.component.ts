import {Component, OnInit} from '@angular/core';
import {ClassifierServiceService} from '../../services/classifier-service.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent implements OnInit {

  constructor(public cs: ClassifierServiceService) {
  }

  ngOnInit(): void {
  }

  sectors = this.cs.getClassifier('2');

  sectorsForm = new FormGroup({
    percent: new FormControl(""),
    sector: new FormControl(undefined),
  });

  sectorsAdd(){
    console.log(this.sectorsForm.value)
  }

}
