import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ApiService } from './api.service';
import { StorageService } from './storage.service';
import { ActionControlService } from './action-control.service';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket: WebSocket;
  stationID: string | null;
  private reconnectInterval: number = 5000;
  wsTimer: any;
  constructor(private storageService: StorageService, private actionControlService: ActionControlService) {

  }

  public connect() {
    this.stationID = this.storageService.getStationID()
    this.socket = new WebSocket(environment.wsBaseUrl + this.stationID); // Replace with your WebSocket server URL

    this.socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    this.socket.onmessage = (event) => {
      console.log('Received message: ', event.data);
      this.actionControlService.actionController(JSON.parse(event.data))
      // Handle incoming messages here
    };

    this.socket.onclose = (event) => {
      console.log('WebSocket connection closed. Reconnecting...');
      this.wsTimer = setTimeout(() => {
        console.log('ws timer ...');
        
        this.connect();
      }, this.reconnectInterval);
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error: ', error);
    };
  }

  public sendMessage(message: string) {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
    } else {
      console.error('WebSocket not open. Message not sent.');
    }
  }

  public closeConnection() {
    this.socket.close();
  }
}
