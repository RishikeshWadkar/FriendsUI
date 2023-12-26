import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FriendComponent } from './Custom/friend/friend.component';

const routes: Routes = [
  { path: '', component: FriendComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
