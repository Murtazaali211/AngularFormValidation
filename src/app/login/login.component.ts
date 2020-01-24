import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
              private route: ActivatedRoute,
              private router: Router) { }

  user: any;
    ngOnInit() {
      this.user = {
        userName: '',
        Password: '',
        confirmpassword: ''
      };
    }

    login() {
      console.log('Successfully');
      console.log(this.user);
      this.router.navigate(['/home']);
    }

}
