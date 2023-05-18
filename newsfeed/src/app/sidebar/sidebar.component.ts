
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { LoggerService } from '../logger.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
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

  constructor(private apiService: ApiService,  private logger: LoggerService) {}

  ngOnInit(): void {
    this.friends = this.apiService.getFriends();
  }

  selectFriend(friend: any): void {
    console.log('Selected friend:', friend);
  }

  viewAll(): void {
    console.log('View all newsfeed items');
  }
}
