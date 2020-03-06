import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ClassifierServiceService} from '../../services/classifier-service.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Sectors} from '../../model/sectors';

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
    // aliases: this.fb.array([
    //   this.fb.control('')
    // ])
  });

  // sectorsAdd(){
  //   this.aliases.push(this.fb.control(this.sectorsForm));
  //   console.log(this.sectorsForm.get('aliases') as FormArray)
  // }

  // get aliases() {
  //   return this.sectorsForm.get('aliases') as FormArray;
  // }


  sectorsArr: Sectorss[] = [];

  sectorsAdd() {
    this.sectorsForm.value.sectorName = this.cs.getSectorName(this.sectorsForm.value.sector);
    if(this.sectorsForm.value.sector && this.sectorsForm.value.percent)this.sectorsArr.push(this.sectorsForm.value);
    console.log(this.sectorsForm.value);
    console.log(this.sectorsArr );
  }

}

interface Sectorss {
  sectorId?: string;
  percent?: number;
  sectorName?: string;
}
