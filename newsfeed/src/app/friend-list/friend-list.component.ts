import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {
  @Output() friendSelected = new EventEmitter<any>();

  friends = [
    {id:1, name:'Margaret'},
    {id:2, name:'Peace'},
    {id:3, name:'Love'},
    {id:4, name:'Patience'},
    {id:5, name:'Mungai'},
    {id:6, name:'Stellah'},
    {id:7, name:'Warren'},
    {id:8, name:'Lydia'},
    {id:9, name:'Muthoni'},
    {id:10, name:'Billy'}
  ];

  constructor() {}

  ngOnInit(): void {}

  selectFriend(friend: any): void {
    this.friendSelected.emit(friend);
  }
}
