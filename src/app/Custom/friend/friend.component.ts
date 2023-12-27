import { Component, OnInit } from '@angular/core';
import { Friend } from '../models/FriendModel';
import { FriendService } from '../service/friend.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrl: './friend.component.scss'
})
export class FriendComponent implements OnInit {


  constructor(private friendService: FriendService, private router: Router) { }

  friends: Friend[] = [];

  ngOnInit() {
    this.friendService.getFriends()
      .subscribe(data => {
        this.friends = data;
      });
  }

  onAddFriendClick() {
    this.router.navigate(['/friends/add']);
  }
}
