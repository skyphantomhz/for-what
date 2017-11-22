import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RegisterService} from "../service/register.service";
import {LoginService} from "../service/login.service";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  hide = true;
  registerForm: FormGroup;
  errorMessage: any;
  loading = false;

  constructor(private _fb: FormBuilder,
              private registerService: RegisterService,
              private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit() {
    this.registerForm = this._fb.group(
      {
        username: this._fb.control('', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(24)])),
        password: this._fb.control('', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(24)])),
        email: this._fb.control('', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEX)]))
      }
    );
  }

  onSubmit(registerForm: NgForm, event: Event) {
    event.preventDefault();
    this.loading = true;
    this.registerService.register(registerForm.value).subscribe(json => {
        console.log(json);
        if (json["message"]) {
          this.loading = false;
          this.errorMessage = json["message"];
          this.router.navigate(['/register']);
        } else {
          localStorage.setItem('currentUser', JSON.stringify({username: registerForm.value.username}));
          if (localStorage.getItem('currentUser')) {
            this.loginService.SetLogin(true);
          } else {
            this.loginService.SetLogin(false);
          }
          setTimeout(() => {
            this.router.navigate(['homepage']);
          }, 1000);
        }
      },
      error => {
        this.errorMessage = <any>error;
      });
  }
}
