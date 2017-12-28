import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { DataService } from "../shared/services/data.service";

@Component({
  selector: "app-fn",
  templateUrl: "./fn.component.html",
  styleUrls: ["./fn.component.css"]
})
export class FnComponent implements OnInit {
  onlineFlag = navigator.onLine;
  results;
  storeData;
  initialfeelings;

  constructor(
    private DataService: DataService, 
    private route: ActivatedRoute,
    private location: Location
  ) {
    let id = this.route.snapshot.params["id"]
    id = id - 1;
    this.initialfeelings = this.DataService.retrieveData();
    this.initialfeelings = this.initialfeelings.initialfeelings[id];

  }
  ngOnInit() {}

  navBack() {
    this.location.back();
  }
}
