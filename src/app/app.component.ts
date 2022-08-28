import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

export interface Post {

  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  search =''

  searchField: keyof Post= 'title'
  posts: Post[] = [
    {title: "Sasha", text: "The best girl in the world!"},
    {title: "Vansha", text: "The best boy in the world!"},
    {title: "Petrusha", text: "The best pet in the world!"}
  ]

  addPost () {
    this.posts.unshift({
      title: "Zina",
      text: "The best mom in the world"
    })
  }

  e: number = Math.E
  str: string ='hello world'
  date1: Date = new Date()
  num: number = 0.57

  p: Promise<string> = new Promise<string>( resolve => {
    setTimeout(() => {
      resolve('Promise resolved')
    }, 4000)
  })

  date: Observable<Date> = new Observable<Date>(obj => {
    setInterval(() => {
      obj.next(new Date())
    }, 1000)
  })

  date2$: Observable<Date> = new Observable<Date>(obj => {
    setInterval(() => {
      obj.next(new Date())
    }, 1000)
  })

  public date2: Date = new Date()

  ngOnInit(): void {
    this.date2$.subscribe(date => {
      this.date2 = date
    })
  }
}
