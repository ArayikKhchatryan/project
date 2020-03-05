import {Component, OnInit} from '@angular/core';
import {ClassifierServiceService} from '../../services/classifier-service.service';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent implements OnInit {

  constructor(public cs: ClassifierServiceService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  sectors = this.cs.getClassifier('2');

  sectorsForm = this.fb.group({
    percent: [''],
    sector: [undefined],
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  sectorsAdd(){
    console.log(this.sectorsForm.get('aliases') as FormArray)
  }

}
