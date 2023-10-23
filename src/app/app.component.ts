import { Component } from '@angular/core';
import { WebSocketService } from './services/web-socket.service';
import { StorageService } from './services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'helloween-app';

  constructor(private webSocket: WebSocketService, private storageService:StorageService,  private router: Router) {
    this.webSocket.connect();

    // if (!this.storageService.getStationID()) {
    //   this.router.navigate(['']);
    // }
  }
}
