import {Injectable} from '@angular/core';
import {Classifiers} from '../model/classifiers';

@Injectable({
  providedIn: 'root'
})
export class ClassifierServiceService {

  constructor() {
  }

  implementation_Status: Classifiers[] = [new Classifiers(1, 'Planned'), new Classifiers(2, 'Pipelined'), new Classifiers(3, 'Ongoing')
    , new Classifiers(4, 'Stalled'), new Classifiers(5, 'Extended'), new Classifiers(6, 'Terminated')
    , new Classifiers(7, 'Suspended'), new Classifiers(8, 'Compladed')];


  sectors_classifier: Classifiers[] = [new Classifiers(1, 'Health'), new Classifiers(2, 'Agriculture')
    , new Classifiers(3, 'Economy'), new Classifiers(4, 'Administrative')];


  getClassifier(classifierName: string) {
    switch (classifierName) {
      case '1':
        return this.implementation_Status;
      case '2':
        return this.sectors_classifier;
    }
  }

  // getImpStatusName(_id): string{
  //   for(let obj of this.implementation_Status){
  //     if(obj.id == _id){
  //       return obj.name;
  //     }
  //   }
  // }

  getSectorName(_id): string{
    for(let obj of this.sectors_classifier){
      if(obj.id == _id){
        return obj.name;
      }
    }
  }

}













