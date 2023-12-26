import { Component, OnInit } from '@angular/core';
import { Friend } from '../../FriendModel';
import { FriendService } from '../../friend.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrl: './friend.component.scss'
})
export class FriendComponent implements OnInit {

  constructor(private friendService: FriendService) { }

  friends: Friend[] = [];

  ngOnInit() {
    this.friendService.getFriends()
      .subscribe(data => {
        this.friends = data;
      });
  }
}
