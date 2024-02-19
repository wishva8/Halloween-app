import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  animation,
  useAnimation,
} from '@angular/animations';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('start', style({ transform: 'translateY(100%)' })), // Start from the bottom
      state('end', style({ transform: 'translateY(-100%)' })), // Exit at the top
      transition('start => end', animate('60s linear')),
    ]),
  ],
})
export class TeamViewComponent implements OnInit {
  scrollState: string = 'start';
  scrollTimeout:any
  storyText: string = "Thank You.....  Our Team ...Irshad...Chathura..Chamindika..Wishva...Tharindu..Samadhi...Malindra..Madhushanka.. And Ravindu"
 

  ngOnInit(){
    this.scrollTimeout = setTimeout(() => {
      this.scrollState = 'end';
    }, 200);
  }
}
