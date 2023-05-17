import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FriendListComponent,
    NewsfeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
