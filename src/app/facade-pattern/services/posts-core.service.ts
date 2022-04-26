import { Injectable } from "@angular/core";
import { ClientPost, ClientUser, PostFromAPI, UserFromAPI } from "@core/models";

@Injectable()
export class PostsCoreService {
  public transformDataToClientPosts([users, posts]: [UserFromAPI[], PostFromAPI[]]): ClientPost[] {
      const clientUsers = this.transformUsersFromAPI(users);

      return posts.map((post: PostFromAPI) => {
        const clientPost: ClientPost = {
          id: post.id,
          title: post.title,
          body: post.body,
          user: clientUsers.find((user: ClientUser) => user.id === post.userId) ?? null,
        };

        return clientPost;
      });
  }

  private transformUsersFromAPI(users: UserFromAPI[]): ClientUser[] {
    return users.map((user: UserFromAPI) => {
      const clientUser: ClientUser = {
        id: user.id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website,
      };

      return clientUser;
    });
  }
}
