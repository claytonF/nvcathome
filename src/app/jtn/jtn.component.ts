import { Component, OnInit } from "@angular/core";
import { DataService } from "../shared/services/data.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-jtn",
  templateUrl: "./jtn.component.html",
  styleUrls: ["./jtn.component.css"]
})
export class JtnComponent implements OnInit {
  results: string;
  initialfeelings;
  constructor(DataService: DataService) {
    //this.results = DataService.retrieveData();
  }

  ngOnInit() {
    //this.initialfeelings = this.results;
    //this.initialfeelings = this.initialfeelings.initialfeelings;
  }
}
