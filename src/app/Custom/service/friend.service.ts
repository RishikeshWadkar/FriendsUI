import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Friend } from '../models/FriendModel';

@Injectable({
  providedIn: 'root'
})
export class FriendService {


  constructor(private httpClient: HttpClient) { }

  // http://localhost:9001
  apiUrl: string = "https://sales-favour-weekend-pledge.trycloudflare.com";
  
  public getFriends(): Observable<Friend[]> {
    return this.httpClient.get<Friend[]>(this.apiUrl+'/friends');
  }

  public setFriends(friend: Friend): Observable<Friend> {
    return this.httpClient.post<Friend>(this.apiUrl+'/friends/addnew', friend);
  }

  public deleteFriendByID(id: number): Observable<any> {
    return this.httpClient.delete(this.apiUrl+'/friends/' + id + '/delete');
  }
  
  public editFriend(id: number, friend: Friend): Observable<Friend> {
    friend.id = id;
    return this.httpClient.put<Friend>(this.apiUrl+'/friends/' + id + '/edit', friend);
  }
}
