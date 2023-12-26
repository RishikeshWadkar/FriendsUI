import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  
  constructor(private httpClient:HttpClient) { }

  public getFriends() {
    return this.httpClient.get('http://localhost:9001/friends');
  }
}
