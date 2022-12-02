import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/auth/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  imgHorizonteLogo = 'assets/img/horizonte.png';
  formLogin: any;
  sesionText: string = 'Login';
  logIn: boolean = false;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private readonly router : Router,
  ) {
    this.formLogin = this.formBuilder.group({
      user:'',
      password: '',
    });
   }

  ngOnInit(): void {
  }
  login(data: any): void {
    try {
      this.loginService.login(data).subscribe((res) => {
        console.log(res);
        if (res.status == 200){
          this.sesionText = 'Logout'
          this.router.navigateByUrl('/management-rates')
          this.loginService.setAccess(true)
        }else  {
          this.formLogin.reset()
          alert("Usuario o contraseña incorrectos")
        }
      })
    } catch (error) {

    }
  }

  logout() {
    this.logIn = false;
    this.sesionText = 'Login'
    this.router.navigateByUrl('/')
    this.loginService.setAccess(false)
    this.formLogin.reset()
  }
}
