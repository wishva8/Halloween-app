import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActionControlService } from 'src/app/services/action-control.service';

interface Symbol {
  id: number;
  path: string;
  selected: boolean;
}

@Component({
  selector: 'app-symbols-display-page',
  templateUrl: './symbols-display-page.component.html',
  styleUrls: ['./symbols-display-page.component.scss'],
})
export class SymbolsDisplayPageComponent implements OnInit {
  @ViewChild('audioPlayer') audioPlayer: ElementRef;
  symbols: Symbol[] = [
    {
      id: 1,
      path: '../../../assets/select-symbol-page-images/not-selected/1.png',
      selected: false,
    },
    {
      id: 2,
      path: '../../../assets/select-symbol-page-images/not-selected/2.png',
      selected: false,
    },
    {
      id: 3,
      path: '../../../assets/select-symbol-page-images/not-selected/3.png',
      selected: false,
    },
    {
      id: 4,
      path: '../../../assets/select-symbol-page-images/not-selected/4.png',
      selected: false,
    },
    {
      id: 5,
      path: '../../../assets/select-symbol-page-images/not-selected/5.png',
      selected: false,
    },
    {
      id: 6,
      path: '../../../assets/select-symbol-page-images/not-selected/6.png',
      selected: false,
    },
  ];

  constructor(public actionControlService: ActionControlService) {
    this.actionControlService.messageSource$.subscribe((value: any) => {
      this.toggleSymbol(value.payload.id, value.payload.selected);
    });
  }

  ngOnInit(): void {}

  toggleSymbol(id: number, status: boolean) {
    const symbol = this.symbols.find((s) => s.id === id);
    this.audioPlayer.nativeElement.currentTime = 0;
    this.audioPlayer.nativeElement.play();
    setTimeout(() => {
      this.stopAudio();
      if (symbol) {
        symbol.selected = !status;
        symbol.path = !status
          ? `../../../assets/select-symbol-page-images/selected/${symbol.id}.png`
          : `../../../assets/select-symbol-page-images/not-selected/${symbol.id}.png`;
      }
    }, 6700);
  }

  playAudio() {
    this.audioPlayer.nativeElement.play();
  }

  stopAudio() {
    this.audioPlayer.nativeElement.pause();
  }
}
