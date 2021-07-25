import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Decr, Incr } from 'src/state/app.action';
import { Detail } from '../../models/detail';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  total = 0;
  allDetails: Detail[] = [];

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.pipe(select(state => state)).subscribe(
      (state) => {
        console.log(state);
        this.total = state.count.count;
        this.allDetails = state.count.details;
      }
    );
  }

  increment(): void {
    // this.total += 1;
    // this.store.dispatch({ type: 'INCREMENT', payload: 1 });
    // this.store.dispatch(new IncrementCounter(1));  ???
    this.store.dispatch(Incr({ payload: 1 }));
  }

  decrement(): void {
    // this.total -= 1;
    // this.store.dispatch({ type: 'DECREMENT', payload: 1 });
    // this.store.dispatch(new DecrementCounter(1));  ???
    this.store.dispatch(Decr({ payload: 1 }));
  }

}
