import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  loggedInFlag = new BehaviorSubject<Boolean>(false);
  flag$ = this.loggedInFlag.asObservable();
  loggedInFlagValue: boolean = false;

  constructor() { }

  setLoggedInFlag(flag: boolean) {
    this.loggedInFlag.next(flag);
    this.loggedInFlagValue = flag;
  } 
}
