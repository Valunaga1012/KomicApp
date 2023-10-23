import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { USER_LOGIN } from 'src/app/core/constants/user-login';
import { Login } from 'src/app/core/models/login.interface';
import { Navigation } from 'src/app/core/routers/navegation.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private _router: Router){}

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  private initializeLoginForm() {
    this.loginForm = this._formBuilder.group({
      email: ['',[Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  public login(form: Login) {
    if( form.email === USER_LOGIN.email && form.password === USER_LOGIN.password ){
      this._router.navigate([Navigation.DASHBOARD])
    }
  }

}
