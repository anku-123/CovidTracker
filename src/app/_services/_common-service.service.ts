import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  private distItem = new BehaviorSubject(0);
  distsharedItem = this.distItem.asObservable();

  constructor(private http: HttpClient) { }
  nextDistItem(item: number) {
    this.distItem.next(item);
  }


  getData(url) {
    return this.http.get(url);

  }


}