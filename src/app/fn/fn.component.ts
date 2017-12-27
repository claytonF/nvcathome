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
    if (this.onlineFlag) {
      this.results = this.DataService.getData();
    } else {
      this.results = this.DataService.retrieveData();
    }
  }

  ngOnInit() {
    console.log("test");
    console.log(this.onlineFlag);
    let id = this.route.snapshot.params["id"];
    id = id - 1;
    console.log(id);
    if (this.onlineFlag) {
      //this.results.subscribe(res => {
        this.initialfeelings = this.DataService.retrieveData();
        this.initialfeelings = this.initialfeelings.initialfeelings[id];
        console.log(this.initialfeelings);
        console.log("found stuff");
      //});
    } else {
      this.initialfeelings = this.results;
      this.initialfeelings = this.initialfeelings.initialfeelings[id];
      console.log(this.initialfeelings);
    }

    
  }

  navBack() {
    this.location.back();
  }
}
