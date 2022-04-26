import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultPatternRoutingModule } from './default-pattern-routing.module';
import { PostsComponent } from './components/posts.component';

@NgModule({
  imports: [
    CommonModule,
    DefaultPatternRoutingModule,
  ],
  declarations: [PostsComponent],
})
export class DefaultPatternModule {}
