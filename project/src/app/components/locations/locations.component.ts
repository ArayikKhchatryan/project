import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {


    // Observable
    //-- ---------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------

    const myObservable = of(1, 2, 3);

    const myObserver = {
      next: x => console.log('next: ' + x),
      error: err => console.error('error: ' + err),
      complete: () => console.log('complete'),
    };

    console.log(myObservable.subscribe(myObserver));


    //-- ---------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------

    let timeoutId;

    function observable(observer) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      timeoutId = setTimeout(()=>console.log("11111111111111111111"),3000);
      observer.next(4);
      observer.complete();
      observer.next(5151);
      observer.next(5454564464);
      // return {
      //   unsubscribe() {
      //   }
      // };
    }

    const sequence = new Observable(observable);

    sequence.subscribe({
      next(num) {console.log(num) },
      complete() {console.log('avart')}
    });
  }


}
