/*import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  username: string="";
  password: string="";
  email: string="";
  
  constructor(private router: Router) {}
  
  onSignUp() {
    const userData = {
      username: this.username,
      password: this.password,
      email: this.email
      
    };
    this.router.navigate(['/login']);
  }
  
}
*/
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  username: string = "";
  password: string = "";
  email: string = "";
  isSignUpSuccessful: boolean = false;

  constructor(private router: Router) {}

  onSignUp() {
    if (this.username && this.password && this.email) {
      // Tüm alanlar doldurulmuşsa kayıt işlemini gerçekleştir
      const userData = {
        username: this.username,
        password: this.password,
        email: this.email
      };

      // Burada gerçek kayıt işlemleri yapılır, şu an için örnek olarak true kabul edelim
      const isRegistrationSuccessful = true;

      if (isRegistrationSuccessful) {
        this.isSignUpSuccessful = true;
        setTimeout(() => {
          this.isSignUpSuccessful = false;
          alert("Kayıt başarıyla oluşturuldu.")
          this.router.navigate(['/login']);
        }, 1000); // 1 saniye sonra login sayfasına yönlendirme yapılır
      }
    } else {
      // Tüm alanlar doldurulmamışsa uyarı ver
      alert("Lütfen tüm alanları doldurunuz!");
    }
  }
}
