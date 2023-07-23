// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {



  username: string = "";
  password: string = "";
  

  constructor(private router: Router) {} // Router'ı enjekte edin
  onLogin() {
    // Kullanıcı adı ve şifre kontrolü
    if (this.username && this.password) {
      console.log('Kullanıcı adı:', this.username);
      console.log('Şifre:', this.password);

      // Gerçek bir giriş uygulamasında, burada servis çağrıları veya kimlik doğrulama işlemleri yapılabilir.

      // Login başarılı ise anasayfaya yönlendir
      this.router.navigate(['/other']);
    } else {
      alert('Lütfen kullanıcı adı ve şifre alanlarını doldurun.');
    }
    
  
  }

  onSignUp() {
    this.router.navigate(['/signup']); // Kayıt olma sayfasına yönlendir
  } 
}






