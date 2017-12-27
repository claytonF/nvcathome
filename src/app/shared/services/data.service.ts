import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class DataService {
  private _url: string = "/src/assets/data/data.json";
  private storedResponse;
  private retrievedResponse;
  private onlineFlag = navigator.onLine;
  constructor(private _http: Http) {}

  getData() {
    console.log(this.onlineFlag);
    console.log(this.retrieveData());
    console.log(this._url);

    /*
    When first load app
    appComponent check if online
    
    If online
    Check if data already in local storage
    
    If data there
    Check if it is current
    
    If current
    Do nothing
    
    If not current call getData()
    
    If no data there call getData()
    
    Of offline (navigating from another view) do nothing
    */

    return this._http.get(this._url).map((response: Response) => {
      response.json();
      this.storeData(response.json());
    });
  }

  storeData(data) {
    this.storedResponse = JSON.stringify(data);
    localStorage.setItem("initialfeelings", this.storedResponse);
  };

  retrieveData() {
    this.retrievedResponse = localStorage.getItem("initialfeelings");
    this.retrievedResponse = JSON.parse(this.retrievedResponse);
    return this.retrievedResponse;
  };

  getDataFromStorage() {
    //this.retrievedResponse = localStorage.getItem("initialfeelings");
    //this.retrievedResponse = JSON.parse(this.retrievedResponse);
    //return this.retrievedResponse;
    console.log("test");
  }
}
