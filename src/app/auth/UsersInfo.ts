import {User} from '../user/user';
export class UsersInfo {

  constructor(
    public count: number,
    public message: string,
    public users: User[],
  ) {}

}

