import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FacadePatternRoutingModule } from "./facade-pattern-routing.module";
import { PostsComponent } from "./components/posts.component";
import { PostsApiService } from "./services/posts-api.service";
import { PostsCoreService } from "./services/posts-core.service";
import { PostsStateService } from "./services/posts-state.service";
import { PostsFacadeService } from "./posts-facade.service";

@NgModule({
  imports: [
    CommonModule,
    FacadePatternRoutingModule,
  ],
  declarations: [PostsComponent],
  providers: [
    PostsApiService,
    PostsCoreService,
    PostsStateService,
    PostsFacadeService,
  ],
})
export class FacadePatternModule {}
