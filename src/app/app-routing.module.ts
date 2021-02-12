import { GraphLayoutComponent } from './graph-layout/graph-layout.component';
import { CircularProgressbarComponent } from './circular-progressbar/circular-progressbar.component';
import { BargraphVerticalMultipleComponent } from './bargraph-vertical-multiple/bargraph-vertical-multiple.component';
import { BargraphVerticalSingleComponent } from './bargraph-vertical-single/bargraph-vertical-single.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BargraphHorizontalComponent } from './bargraph-horizontal/bargraph-horizontal.component';

const routes: Routes = [
  { path: "", component: GraphLayoutComponent },
  { path: "bargraph-vertical-single", component: BargraphVerticalSingleComponent },
  { path: "bargraph-vertical-multiple", component: BargraphVerticalMultipleComponent },
  { path: "bargraph-horizontal", component: BargraphHorizontalComponent },
  { path: "circular-progressbar", component: CircularProgressbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
