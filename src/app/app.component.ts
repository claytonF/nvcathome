import { Component, OnInit } from "@angular/core";
import { DataService } from "./shared/services/data.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  queryString;
  onlineFlag = navigator.onLine;
  results;
  initialfeelings;
  constructor(private DataService: DataService) {
    if (this.onlineFlag) {
      this.results = this.DataService.getData();
    } else {
      this.results = this.DataService.retrieveData();
    }
  }

  ngOnInit() {
    this.DataService.initialise();
    console.log(this.onlineFlag);
    if (this.onlineFlag) {
      this.results.subscribe(res => {
        this.initialfeelings = this.DataService.retrieveData();
        this.initialfeelings = this.initialfeelings.initialfeelings;
      });
    } else {
      this.initialfeelings = this.results;
      this.initialfeelings = this.initialfeelings.initialfeelings;
    }
  }

  ngOnDestroy() {
    
    this.initialfeelings = null;
  }
}
