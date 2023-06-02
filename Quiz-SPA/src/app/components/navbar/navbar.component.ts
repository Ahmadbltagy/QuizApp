import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavServiceService } from 'src/app/services/nav-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private userService: NavServiceService, private route : ActivatedRoute) {}
  userId: any;
  user:any;

  isAdmin: boolean = false;

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get("userId"));
    this.userService.getUserById(this.userId).subscribe((response)=> this.user = response);
    this.isAdmin = this.user.role.toLower() === "admin";
  }
}
