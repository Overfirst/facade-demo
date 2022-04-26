import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { USERS_URL } from '@core/const';
import { ClientUser, UserFromAPI } from '@core/models';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private http: HttpClient) {}

  public getAllUsers(): Observable<ClientUser[]> {
    return this.http.get<UserFromAPI[]>(USERS_URL)
      .pipe(
        map((users: UserFromAPI[]) => {
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
        })
      );
  }
}
