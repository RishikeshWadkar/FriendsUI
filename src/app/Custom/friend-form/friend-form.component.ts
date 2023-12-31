import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { error } from 'node:console';
import { FriendService } from '../service/friend.service';
import { Friend } from '../models/FriendModel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-friend-form',
  templateUrl: './friend-form.component.html',
  styleUrl: './friend-form.component.scss'
})
export class FriendFormComponent implements OnInit {
  receivedObject: any;

  constructor(private formBuilder: FormBuilder,
    private friendService: FriendService,
    private router: Router) {

    this.createFriendsFrom(null);

    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      this.friend = navigation.extras.state['friendData'];
      console.log(this.friend);
      this.createFriendsFrom(this.friend);
    }

  }

  addFriendForm?: FormGroup;
  friend!: Friend;

  ngOnInit(): void {
  }

  get getfriendForm(): any {
    return this.addFriendForm?.controls;
  }

  createFriendsFrom(data?: any) {
    if (data === null) {
      this.addFriendForm = this.formBuilder.group({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        country: new FormControl('', [Validators.required]),
        netWorth: new FormControl('', [Validators.required]),
        dob: ['', [Validators.required]],
        department: ['', [Validators.required]]
      });
    }
    else {
      this.addFriendForm = this.formBuilder.group({
        firstName: new FormControl(data.firstName, [Validators.required]),
        lastName: new FormControl(data.lastName, [Validators.required]),
        email: new FormControl(data.email, [Validators.required, Validators.email]),
        country: new FormControl(data.country, [Validators.required]),
        netWorth: new FormControl(data.netWorth, [Validators.required]),
        dob: new FormControl(data.dob, [Validators.required]),
        department: new FormControl(data.department, [Validators.required])
      });
    }
  }

  onFriendsFormSubmit(): any {
    if (this.addFriendForm?.invalid) {
      this.markFormGroupTouched(this.addFriendForm);
      return;
    }
    console.log(this.addFriendForm?.value);

    if (this.friend){
      this.friendService.editFriend(this.friend.id, this.addFriendForm?.value).subscribe((data: Friend) => {
        this.router.navigate(['/friends']);
      });
    }
    else {
      this.friendService.setFriends(this.addFriendForm?.value).subscribe((data: Friend) => {
        this.router.navigate(['/friends']);
      });
    }

  }

  // Recursive function to mark all form fields as touched
  markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }
}
