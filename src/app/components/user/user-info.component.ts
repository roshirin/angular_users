import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../../services/users-data.service';
import { User } from 'src/types/User';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  user: User | null = null;

  constructor(
    private route: ActivatedRoute,
    private userDataService: UserDataService
  ) {}

  ngOnInit(): void {
    const users = this.userDataService.getUsers();
    const userId = this.route.snapshot.paramMap.get('id');
    
    this.user = users.find((user: User) => String(user.id) === userId) || null;
  }
}
