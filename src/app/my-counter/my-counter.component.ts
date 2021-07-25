import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../ngrx/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {
  count$!: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select(state => state.count);
  }

  ngOnInit(): void {
  }

  myIncrement() {
    this.store.dispatch(increment());
  }
 
  myDecrement() {
    this.store.dispatch(decrement());
  }
 
  myReset() {
    this.store.dispatch(reset());
  }
}
