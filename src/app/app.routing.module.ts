import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { FtnComponent } from "./ftn/ftn.component";
import { FnComponent } from "./fn/fn.component";
import { JtnComponent } from "./jtn/jtn.component";
import { JnComponent } from "./jn/jn.component";

const routes: Routes = [
  {
    path: "ftn",
    component: FtnComponent,
    pathMatch: "full"
  },
  {
    path: "fn/:id",
    component: FnComponent
  },
  {
    path: "jtn",
    component: JtnComponent,
    pathMatch: "full"
  },
  {
    path: "jtn/need",
    component: JnComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class routingModule {}
