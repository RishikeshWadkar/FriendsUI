import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FriendComponent } from './Custom/friend/friend.component';
import { HomeComponent } from './Custom/home/home.component';
import { ProfileComponent } from './Custom/profile/profile.component';
import { AboutComponent } from './Custom/about/about.component';

const routes: Routes = [
  { path: '', redirectTo:"/home",pathMatch:"full"},
  { path: 'home', component: HomeComponent },
  { path: 'friends', component: FriendComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
