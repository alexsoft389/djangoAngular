import {Component, OnInit} from '@angular/core';
import {BlogPostService} from './blog_post.service';
import {UserService} from './user.service';
import {throwError} from 'rxjs';  // Angular 6/RxJS 6

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private _blogPostService: BlogPostService, private _userService: UserService) { }

  ngOnInit() {

  }



}
