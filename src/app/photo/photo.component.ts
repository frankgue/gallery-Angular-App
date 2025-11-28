import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  standalone: false,
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent implements OnInit {

videos = [
  {vName: "React project from scratch", phone: "https://dummyimage.com/600x400/c2b4c2/fff", like: 0, dislike: 0},
  {vName: "Springboot from scratch", phone: "https://dummyimage.com/600x400/c2b4c2/fff", like: 0, dislike: 0},
  {vName: "Angular project from scratch", phone: "https://dummyimage.com/600x400/c2b4c2/fff", like: 0, dislike: 0},
  {vName: "Flutter project from scratch", phone: "https://dummyimage.com/600x400/c2b4c2/fff", like: 0, dislike: 0},
];

  constructor(){}

  ngOnInit(): void {
   
  }

  likeCounter(video: any){
    video.like++;
  }

  dislikeCounter(video: any){
    video.dislike++;
  }

}
