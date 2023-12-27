import { Component, OnInit } from '@angular/core';
import { Friend } from '../models/FriendModel';
import { FriendService } from '../service/friend.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrl: './friend.component.scss'
})
export class FriendComponent implements OnInit {


  constructor(private friendService: FriendService,
    private router: Router,
    private formBuilder: FormBuilder,
    activatedRoute: ActivatedRoute) { }

  friends: Friend[] = [];
  addFriendForm?: FormGroup;

  ngOnInit() {
    this.subscribeToFriends();
  }

  onAddFriendClick() {
    this.router.navigate(['/friends/add']);
  }

  onEditFriendClick(friend: Friend) {
    this.friendService.editFriend(friend).subscribe((data: Friend) => {
      this.router.navigate(['/friends/add'], { state: { friendData: friend } });
    })
  }

  onDeleteFriendClick(id: number) {
    this.friendService.deleteFriendByID(id).subscribe((data: Friend) => {
      this.subscribeToFriends();
    })
  }

  public subscribeToFriends() {
    this.friendService.getFriends()
      .subscribe(data => {
        this.friends = data;
      });
  }
}
