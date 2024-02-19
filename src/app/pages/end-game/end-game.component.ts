import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.scss'],
})
export class EndGameComponent implements OnInit, OnDestroy {
  timeOutId: any;
  isVideoEnded: boolean = false;
  constructor(
    private router: Router,
    private storageService: StorageService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((queryParams) => {
      // Use queryParams object to access the parameters
      // Do something with these values
      console.log(JSON.parse(JSON.stringify(queryParams)));
    });
  }

  ngOnDestroy() {
    clearTimeout(this.timeOutId);
  }

  endGame() {
    this.isVideoEnded = true;
    if (this.storageService.getStationID() == '0') {
      this.router.navigate(['team-view']);
    }
  }

  ngOnInit(): void {}
}
