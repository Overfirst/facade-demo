import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, map, Observable } from 'rxjs';

import { PostFromAPI, ClientPost, ClientUser } from '@core/models';
import { POSTS_URL } from '@core/const';
import { UsersService } from './users.service';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(
    private usersService: UsersService,
    private http: HttpClient,
  ) {}

  public getAllPosts(): Observable<ClientPost[]> {
    return combineLatest([
      this.usersService.getAllUsers(),
      this.http.get<PostFromAPI[]>(POSTS_URL),
    ]).pipe(
      map(([users, posts]: [ClientUser[], PostFromAPI[]]) => {
        return posts.map((post: PostFromAPI) => {
          const clientPost: ClientPost = {
            id: post.id,
            title: post.title,
            body: post.body,
            user: users.find((user: ClientUser) => user.id === post.userId) ?? null,
          };

          return clientPost;
        });
      })
    )
  }
}
