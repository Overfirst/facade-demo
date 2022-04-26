import { Injectable } from '@angular/core';
import { ClientPost } from '@core/models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class PostsStateService {
  private posts$ = new BehaviorSubject<ClientPost[]>([]);
  private isLoading$ = new BehaviorSubject<boolean>(false);

  public getPosts(): Observable<ClientPost[]> {
    return this.posts$.asObservable();
  }

  public setPosts(posts: ClientPost[]): void {
    this.posts$.next(posts);
  }

  public getIsLoading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }

  public setIsLoading(isLoading: boolean): void {
    this.isLoading$.next(isLoading);
  }
}
