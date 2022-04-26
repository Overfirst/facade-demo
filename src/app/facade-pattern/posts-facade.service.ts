import { Injectable } from "@angular/core";
import { map, Observable, Subject, takeUntil } from "rxjs";

import { ClientPost } from "@core/models";
import { PostsStateService } from "./services/posts-state.service";
import { PostsApiService } from "./services/posts-api.service";
import { PostsCoreService } from "./services/posts-core.service";

@Injectable()
export class PostsFacadeService {
  constructor(
    private postsStateService: PostsStateService,
    private postsApiService: PostsApiService,
    private postsCoreService: PostsCoreService,
  ) {}

  private destroy$ = new Subject<void>();

  public fetchPosts(): void {
    this.postsStateService.setIsLoading(true);

    this.postsApiService.getAllPostsAndUsers()
      .pipe(
        map(data => this.postsCoreService.transformDataToClientPosts(data)),
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (posts: ClientPost[]) => {
          this.postsStateService.setPosts(posts);
          this.postsStateService.setIsLoading(false);
        },

        error: (error: unknown) => {
          this.postsStateService.setPosts([]);
          this.postsStateService.setIsLoading(false);
          console.error(error);
        },
      })
  }

  public clearPosts(): void {
    this.postsStateService.setPosts([]);
    this.destroy$.next();
    this.destroy$.complete();
  }

  public getIsLoading(): Observable<boolean> {
    return this.postsStateService.getIsLoading();
  }

  public getPosts(): Observable<ClientPost[]> {
    return this.postsStateService.getPosts();
  }
}
