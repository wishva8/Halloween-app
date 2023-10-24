import { Component } from '@angular/core';
import { SymbolsDisplayPageComponent } from '../symbols-display-page/symbols-display-page.component';
import { ActionControlService } from 'src/app/services/action-control.service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
interface Symbol {
  id: number;
  path: string;
  selected: boolean;
}
@Component({
  selector: 'app-select-symbols-page',
  templateUrl: './select-symbols-page.component.html',
  styleUrls: ['./select-symbols-page.component.scss'],
})
export class SelectSymbolsPageComponent {
  symbols: Symbol[] = [
    {
      id: 1,
      path: '../../../assets/select-symbol-page-images/control-symbols/not-selected/1.png',
      selected: false,
    },
    {
      id: 2,
      path: '../../../assets/select-symbol-page-images/control-symbols/not-selected/2.png',
      selected: false,
    },
    {
      id: 3,
      path: '../../../assets/select-symbol-page-images/control-symbols/not-selected/3.png',
      selected: false,
    },
    {
      id: 4,
      path: '../../../assets/select-symbol-page-images/control-symbols/not-selected/4.png',
      selected: false,
    },
    {
      id: 5,
      path: '../../../assets/select-symbol-page-images/control-symbols/not-selected/5.png',
      selected: false,
    },
    {
      id: 6,
      path: '../../../assets/select-symbol-page-images/control-symbols/not-selected/6.png',
      selected: false,
    },
  ];
  isSelectable: boolean = true;
  selectedSymbols: any = [];

  constructor(
    private apiService: ApiService,
    private actionControlService: ActionControlService,
    private router: Router
  ) {}

  toggleSymbol(symbol: Symbol): any {
    if (this.isSelectable) {
      this.isSelectable = false;

      const body = {
        id: symbol.id,
        path: symbol.path,
        selected: symbol.selected,
      };
      this.apiService
        .post(body, '', `select-symbols`)
        .then((response_first: any) => {
          this.selectedSymbols.push(symbol.id);
        })
        .finally(() => {});

      symbol.selected = !symbol.selected;
      symbol.path = symbol.selected
        ? `../../../assets/select-symbol-page-images/control-symbols/selected/${symbol.id}.png`
        : `../../../assets/select-symbol-page-images/control-symbols/not-selected/${symbol.id}.png`;

      setTimeout(() => {
        this.isSelectable = true;
        console.log(this.selectedSymbols);
        

        if (this.selectedSymbols.length > 2) {
          const data = {
            sequence: this.selectedSymbols,
          };
          this.apiService.post(data, '', 'end-game').then((response: any) => {
            
          });
        }
      }, 6800);
    }
  }
}
