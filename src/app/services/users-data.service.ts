import { Injectable } from '@angular/core';
import { User } from 'src/types/User';
import { users } from 'src/data/users';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {
  private storageKey = 'users';

  constructor() {}

  setUsers(users: User[]) {
    const stringifiedUsers = JSON.stringify(users);
    localStorage.setItem(this.storageKey, stringifiedUsers);
  }

  getUsers() {
    const stringifiedUsers = localStorage.getItem(this.storageKey);
    return stringifiedUsers ? JSON.parse(stringifiedUsers) : [];
  }

  initializeUsers() {
    const stringifiedUsers = JSON.stringify(users);

    localStorage.setItem(this.storageKey, stringifiedUsers);
  }
}
