import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  getStationID() {
    return window.localStorage.getItem('stationID')
  }

  constructor() { }

  setStationID(stationID: any) {
    window.localStorage.setItem('stationID', stationID)
  }
}
