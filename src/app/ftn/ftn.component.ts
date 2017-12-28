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
  initialfeelings;
  constructor(private DataService: DataService) {

    this.initialfeelings = this.DataService.retrieveData();
    this.initialfeelings = this.initialfeelings.initialfeelings;
  }

  ngOnInit() {}

  ngOnDestroy() {
    
    this.initialfeelings = null;
  }
}
