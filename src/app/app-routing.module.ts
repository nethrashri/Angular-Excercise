import { NgModule } from '@angular/core';
import { M2Component } from './m2/m2.component';
import { M3Component } from './m3/m3.component';
import { M4Component } from './m4/m4.component';
import { M5Component } from './m5/m5.component';
import { M1Component } from './m1/m1.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "m2",
    component: M2Component
  }, {
    path: "m3",
    component: M3Component
  },{
    path: "m4",
    component: M4Component
  }, {
    path: "m5",
    component: M5Component
  },{
    path: "m1",
    component: M1Component
  },
  {
    path: "",
    redirectTo: "/m1",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
