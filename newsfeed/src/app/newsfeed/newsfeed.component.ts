import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
  newsfeedItems = [
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

  constructor() {}

  ngOnInit(): void {}

  addComment(itemId:number): void {
    console.log('Add comment to item:', itemId);
  }

  favorite(itemId: number): void {
    console.log('Favorite item:', itemId);
  }
}
