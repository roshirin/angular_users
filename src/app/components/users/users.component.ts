import { Component, OnInit } from '@angular/core';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { UserDataService } from '../../services/users-data.service';
import { User } from 'src/types/User';
import { SortTypes } from 'src/types/SortTypes';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  users: User[] = [];
  keys: string[] = [];
  preparedUsers: User[] = [];

  faSort = faSort;
  faSortUp = faSortUp;
  faSortDown = faSortDown;

  sortColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.users = this.userDataService.getUsers();
    this.keys = Object.keys(this.users[0]);
  }

  getSortIcon(column: string) {
    if (this.sortColumn === column) {
      return this.sortDirection === 'asc' ? this.faSortUp : this.faSortDown;
    }
    return this.faSort;
  }

  toggleSort(column: string) {
    if (this.sortColumn === column) {
      if (this.sortDirection === 'asc') {
        this.sortDirection = 'desc';

        return;
      }

      this.sortColumn = null;

      return;
    }

    this.sortColumn = column;
    this.sortDirection = 'asc';
  }

  handleSort(column: string) {
    if (column === 'permissions') {
      return;
    }

    this.toggleSort(column);

    this.users.sort((user1, user2) => {
      const desc = this.sortDirection === 'desc' ? -1 : 1;

      switch (this.sortColumn) {
        case SortTypes.ID:
          return (user1.id - user2.id) * desc;

        case SortTypes.NAME:
          return user1.name.localeCompare(user2.name) * desc;

        case SortTypes.DATE:
          const date1 = new Date(user1.date).getTime();
          const date2 = new Date(user2.date).getTime();

          return (date1 - date2) * desc;

        default:
          return user1.id - user2.id;
      }
    });
  }
}
