import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';

import { PostsService } from '../services/posts.service';
import { ClientPost } from '@core/models';
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: 'app-posts-default',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  public isLoading = false;
  public posts: ClientPost[] = [];

  constructor(
    private postsService: PostsService,
    private cdRef: ChangeDetectorRef,
  ) {}

  public ngOnInit(): void {
    this.fetchPosts();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private fetchPosts(): void {
    this.isLoading = true;

    this.postsService.getAllPosts()
      .pipe(takeUntil(this.destroy$))
      .subscribe((posts: ClientPost[]) => {
        this.posts = posts;
        this.isLoading = false;
        this.cdRef.detectChanges();
      });
  }
}
