import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionControlService {
  // Observable string sources
  private invokeComponentFunction = new Subject(); 

  // Observable string streams
  componentFunctionCalled$ = this.invokeComponentFunction.asObservable();
  constructor(private router: Router) { }

  actionController(payload: any) {
    if (payload.action == 'changeRoute') {
      this.changeRoute(payload.payload.path)
    } else if (payload.action == 'moveGhost') {
      this.invokeComponentFunction.next('');
    }
  }
  changeRoute(path: string) {
    this.router.navigate([path])
  }
}
