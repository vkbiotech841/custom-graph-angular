import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { CircularProgressbarComponent } from './circular-progressbar/circular-progressbar.component';
import { BargraphHorizontalComponent } from './bargraph-horizontal/bargraph-horizontal.component';
import { BargraphVerticalSingleComponent } from './bargraph-vertical-single/bargraph-vertical-single.component';
import { BargraphVerticalMultipleComponent } from './bargraph-vertical-multiple/bargraph-vertical-multiple.component';
import { GraphLayoutComponent } from './graph-layout/graph-layout.component';
import { CircularProgressbarMultipleComponent } from './circular-progressbar-multiple/circular-progressbar-multiple.component';

@NgModule({
  declarations: [
    AppComponent,
    BarGraphComponent,
    CircularProgressbarComponent,
    BargraphHorizontalComponent,
    BargraphVerticalSingleComponent,
    BargraphVerticalMultipleComponent,
    GraphLayoutComponent,
    CircularProgressbarMultipleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
