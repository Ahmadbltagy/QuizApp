import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getRole, setRole } from 'src/app/models/role';
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
  role:any;
  loggedin:boolean = false;
  isAdmin: boolean = false;
  name:any;

  ngOnInit(): void {

    // this.userId = Number(this.route.snapshot.paramMap.get("userId"));
    // this.userService.getUserById(this.userId).subscribe((response)=> this.user = response);

     this.name = localStorage.getItem("name");
    this.loggedin = localStorage.getItem("loggedIn") == "true"?true:false;
    this.role = localStorage.getItem("role");
    console.log(this.role);

    // setRole(localStorage.getItem("role"));
    // getRole();

  }
  signOut(){
      localStorage.removeItem("name");
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("role");
      this.role= null;
      this.loggedin = false;
  }
}
