import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'ivan',
      password: 'ivan',
    },
    {
      username: 'hannah',
      password: 'hannah',
    },
    {
      username: 'adri',
      password: 'adri',
    },
    {
      username: 'papa',
      password: 'papa',
    },
  ];

  getUsers() {
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
