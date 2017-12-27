import { Component, OnInit } from "@angular/core";
import { DataService } from "../shared/services/data.service";

@Component({
  selector: "app-ftn",
  templateUrl: "./ftn.component.html",
  styleUrls: ["./ftn.component.css"]
})
export class FtnComponent implements OnInit {
  queryString;
  onlineFlag = navigator.onLine;
  results;
  storeData;
  initialfeelings;
  constructor(private DataService: DataService) {
    if (this.onlineFlag) {
      this.results = this.DataService.getData();
    } else {
      this.results = this.DataService.retrieveData();
    }
  }

  ngOnInit() {
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
