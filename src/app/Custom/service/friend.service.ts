import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Friend } from '../models/FriendModel';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  
  constructor(private httpClient:HttpClient) { }

  public getFriends(): Observable<Friend[]> {
    return this.httpClient.get<Friend[]>('http://localhost:9001/friends');
  }
}
