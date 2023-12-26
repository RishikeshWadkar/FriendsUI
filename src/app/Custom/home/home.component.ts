import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) { }

  onAboutClick() {
    this.router.navigate(['/about']);
  }
  onProfileClick() {
    this.router.navigate(['/profile']);
  }
  onFriendsClick() {
    this.router.navigate(['/friends']);
  }
  onHomeClick() {
    this.router.navigate(['/home']);
  }

}
