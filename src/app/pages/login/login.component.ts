import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj = {
    userName : "",
    password: ""
  }

  router = inject(Router);
  http= inject(HttpClient);

  onLogin(){
    
    this.http.post("https://projectapi.gerasim.in/api/EmployeeManagement/login", this.loginObj).subscribe((res :any) => {
      if(res.result) {
        debugger
        localStorage.setItem("employeeApp", JSON.stringify(res.data))
        this.router.navigateByUrl('dashboard');
      } else {
        alert(res.message)
      }
    })
  }
}
