import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { error } from 'node:console';
import { FriendService } from '../service/friend.service';
import { Friend } from '../models/FriendModel';

@Component({
  selector: 'app-friend-form',
  templateUrl: './friend-form.component.html',
  styleUrl: './friend-form.component.scss'
})
export class FriendFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private friendService: FriendService) { }

  addFriendForm?: FormGroup;

  ngOnInit(): void {
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

  get getfriendForm(): any {
    return this.addFriendForm?.controls;
  }

  onFriendsFormSubmit(): any {
    if (this.addFriendForm?.invalid) {
      this.markFormGroupTouched(this.addFriendForm);
      return;
    }
    console.log(this.addFriendForm?.value);
    console.log("Form submitted");
    
    this.friendService.setFriends(this.addFriendForm?.value).subscribe((data:Friend) =>{
      alert('data saved')
    });
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
