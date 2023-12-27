import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Friend } from '../models/FriendModel';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private httpClient: HttpClient) { }

  public getFriends(): Observable<Friend[]> {
    return this.httpClient.get<Friend[]>('http://localhost:9001/friends');
  }

  public setFriends(friend: Friend): Observable<Friend> {
    return this.httpClient.post<Friend>('http://localhost:9001/friends/addnew', friend);
  }

  public deleteFriendByID(id: number): Observable<any> {
    return this.httpClient.delete('http://localhost:9001/friends/' + id + '/delete');
  }
  
  public editFriend(friend: Friend): Observable<Friend> {
    return this.httpClient.put<Friend>('http://localhost:9001/friends/' + friend.id + '/edit', friend);
  }
}
