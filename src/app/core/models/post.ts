import { ClientUser } from "./user";

export interface PostFromAPI {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface ClientPost {
  id: number;
  user: ClientUser | null;
  title: string;
  body: string;
}
