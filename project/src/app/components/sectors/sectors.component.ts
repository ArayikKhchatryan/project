import {Component, OnInit} from '@angular/core';
import {ClassifierServiceService} from '../../services/classifier-service.service';

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

  sectors = this.cs.getClasssifier('2');

}
