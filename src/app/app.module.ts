import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// NgRx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// *** CodeConcept
import { reducer } from 'src/state/app.reducer';
import { CounterComponent } from './counter/counter.component';

// *** NgRx.io
// import { counterReducer } from './ngrx/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: reducer }),
    StoreDevtoolsModule.instrument({
      name: 'Counterx devtools',
      maxAge: 15
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
