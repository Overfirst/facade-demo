import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from "@angular/core";
import { PostsFacadeService } from "../posts-facade.service";

@Component({
  selector: 'app-posts-facade',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent implements OnInit, OnDestroy {
  constructor(private postsFacadeService: PostsFacadeService) {}

  public isLoading$ = this.postsFacadeService.getIsLoading();
  public posts$ = this.postsFacadeService.getPosts();

  public ngOnInit(): void {
    this.postsFacadeService.fetchPosts();
  }

  public ngOnDestroy(): void {
    this.postsFacadeService.clearPosts();
  }
}
