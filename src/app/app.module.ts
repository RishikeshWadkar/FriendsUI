import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendComponent } from './Custom/friend/friend.component';
import { FriendService } from './Custom/service/friend.service';
import { HttpClientModule, provideHttpClient, withFetch} from '@angular/common/http';
import { AgePipe } from './age.pipe';
import { HomeComponent } from './Custom/home/home.component';
import { ProfileComponent } from './Custom/profile/profile.component';
import { AboutComponent } from './Custom/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendComponent,
    AgePipe,
    HomeComponent,
    ProfileComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    FriendService,
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
