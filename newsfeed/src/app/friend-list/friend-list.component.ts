import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {
  @Output() friendSelected = new EventEmitter<any>();

  friends = [
    {id:1, name:'Kingston'},
    {id:2, name:'Wanjiku'},
    {id:3, name:'Kevin'},
    {id:4, name:'Judie'},
    {id:5, name:'Dan'},
    {id:6, name:'Stellah'},
    {id:7, name:'Warren'},
    {id:8, name:'Lydia'},
    {id:9, name:'Shirllie'},
    {id:10, name:'Billy'}
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.friends = this.apiService.getFriends();
  }

  selectFriend(friend: any): void {
    this.friendSelected.emit(friend);
  }
}
