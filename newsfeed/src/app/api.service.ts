import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private accessToken = 'mock-access-token';

  private friends = [
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

  private newsfeedItems = [
    {
      id: 1,
      subject: 'Kingston',
      action: 'added',
      object: 'Jane as a friend'
    },
    {
      id: 2,
      subject: 'Wanjiku',
      action: 'liked',
      object: 'John\'s post'
    },
    {
      id: 3,
      subject: 'Kevin',
      action: 'uploaded',
      object: 'a new photo'
    },
    {
      id: 4,
      subject: 'Judie',
      action: 'commented',
      object: 'on Billy photo'
    },
    {
      id: 5,
      subject: 'Dan',
      action: 'liked',
      object: 'Shirllie\'s photo'
    },
    {
      id: 6,
      subject: 'Stellah',
      action: 'uploaded',
      object: 'a new photo'
    },
    {
      id: 7,
      subject: 'Warren',
      action: 'liked',
      object: 'your photo'
    },
    {
      id: 8,
      subject: 'Lydia',
      action: 'commented',
      object: 'on Stellah\'s post'
    },
    {
      id: 9,
      subject: 'Shirllie',
      action: 'uploaded',
      object: 'a new photo'
    },
    {
      id: 10,
      subject: 'Billy',
      action: 'added',
      object: 'Lydia as a friend'
    },
  ];

  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.friends = this.apiService.getFriends();
    this.newsfeedItems = this.apiService.getNewsfeedItems();
  }

  addComment(itemId: number, comment: string): void {
    this.apiService.addComment(itemId, comment);
    console.log('API call - addComment:', this.accessToken, itemId, comment);
  }

  favorite(itemId: number): void {
    this.apiService.favorite(itemId);
    console.log('API call - favorite:', this.accessToken, itemId);
  }
  getFriends(): any[] {
    console.log('API call - getFriends:', this.accessToken);
    return this.friends;
  }

  getNewsfeedItems(): any[] {
    console.log('API call - getNewsfeedItems:', this.accessToken);
    return this.newsfeedItems;
  }

}
