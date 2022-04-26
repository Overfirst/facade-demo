import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, Observable } from 'rxjs';

import { PostFromAPI, UserFromAPI } from '@core/models';
import { POSTS_URL, USERS_URL } from "@core/const";

@Injectable()
export class PostsApiService {
  constructor(private http: HttpClient) {}

  private getAllUsers(): Observable<UserFromAPI[]> {
    return this.http.get<UserFromAPI[]>(USERS_URL);
  }

  public getAllPostsAndUsers(): Observable<[UserFromAPI[], PostFromAPI[]]> {
    return combineLatest([
      this.getAllUsers(),
      this.http.get<PostFromAPI[]>(POSTS_URL),
    ]);
  }
}
