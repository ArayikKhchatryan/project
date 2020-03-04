import {Injectable} from '@angular/core';
import {Classifiers} from '../model/classifiers';

@Injectable({
  providedIn: 'root'
})
export class ClassifierServiceService {

  constructor() {
  }


  getClassifier() {

  }

  implementation_Status: Classifiers[] = [new Classifiers(1, 'Planned'), new Classifiers(2, 'Pipelined'), new Classifiers(3, 'Ongoing')
    , new Classifiers(4, 'Stalled'), new Classifiers(5, 'Extended'), new Classifiers(6, 'Terminated')
    , new Classifiers(7, 'Suspended'), new Classifiers(8, 'Compladed')];


  sectors_classifier: Classifiers[] = [new Classifiers(1, 'Health'), new Classifiers(2, 'Agriculture')
    , new Classifiers(3, 'Economy'), new Classifiers(4, 'Administrative')];


  getClasssifier(Classifier_Name: string) {
    switch (Classifier_Name) {
      case '1':
        return this.implementation_Status;
      case '2':
        return this.sectors_classifier;
    }
  }
}













