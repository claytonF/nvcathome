import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { FtnComponent } from "./ftn/ftn.component";
import { routingModule } from "./app.routing.module";
import { JtnComponent } from "./jtn/jtn.component";
import { DataService } from "./shared/services/data.service";
import { SearchFilterPipe } from "./shared/pipes/searchfilter.pipe";
import { FnComponent } from "./fn/fn.component";
import { JnComponent } from "./jn/jn.component";
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FtnComponent,
    JtnComponent,
    SearchFilterPipe,
    FnComponent,
    JnComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routingModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
