import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  private disbItem = new BehaviorSubject(0);
  disbsharedItem = this.disbItem.asObservable();

  constructor(private http: HttpClient) { }
  nextDisbItem(item: number) {
    console.log(item);
    this.disbItem.next(item);
  }


  getData(url) {
    return this.http.get(url);

  }


}