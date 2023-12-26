import { Component } from '@angular/core';
import { Friend } from '../../FriendModel';
import { FriendService } from '../../friend.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrl: './friend.component.scss'
})
export class FriendComponent {
  friends: any;

  constructor(private friendService: FriendService) {}

  ngOnInit() {
    this.friends = this.friendService.getFriends().subscribe((data) => this.friends=data);
  }
}
