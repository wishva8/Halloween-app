import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  getStationID(): any {
    return window.localStorage.getItem('stationID');
  }

  setStationID(stationID: any) {
    window.localStorage.setItem('stationID', stationID);
  }

  getLocationGroupID(): any {
    return window.localStorage.getItem('locationGroupID');
  }

  setLocationGroupID(stationID: any) {
    window.localStorage.setItem('locationGroupID', stationID);
  }
}
