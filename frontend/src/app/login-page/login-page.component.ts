import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../_services/authentication.service";
import {LoginService} from "../_services/login.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  hide = false;
  errorMessage = '';
  loginForm: FormGroup;
  loading = false;

  constructor(private _fb: FormBuilder, private authenticationService: AuthenticationService,
              private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this._fb.group(
      {
        username: this._fb.control('', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(24)])),
        password: this._fb.control('', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(24)]))
      }
    );
  }

  onSubmit(login: NgForm, event: Event) {
    event.preventDefault();
    this.loading = true;
    this.authenticationService.login(login.value)
      .subscribe(result => {

        console.log("res:" + JSON.parse(JSON.stringify(result))["message"]);
        if (result.usernameId == null) {
          // login failed
          login.reset();
          this.errorMessage = JSON.parse(JSON.stringify(result))["message"];
          this.loading = false;
        } else {
          // login successful
          console.log(JSON.stringify(result));
          localStorage.setItem('currentUser', 'true');
          localStorage.setItem('usernameId', result.usernameId.toString());
          localStorage.setItem('username', result.username.toString());
          localStorage.setItem('email', result.email.toString());
          if (localStorage.getItem('currentUser')) {
            this.loginService.SetLogin(true);
          } else {
            this.loginService.SetLogin(false);
          }
          setTimeout(() => {
            this.router.navigate(['homepage']);
          }, 1000);
        }
      });
  }
}
