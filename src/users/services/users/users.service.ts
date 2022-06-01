import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'ivan',
      password: 'ivan',
    },
    {
      id: 2,
      username: 'hannah',
      password: 'hannah',
    },
    {
      id: 3,
      username: 'adri',
      password: 'adri',
    },
    {
      id: 4,
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

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
