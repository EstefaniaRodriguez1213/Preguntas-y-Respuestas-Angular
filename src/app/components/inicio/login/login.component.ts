import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Usuario } from '../../../models/usuario'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService , private router: Router, 
    private loginService: LoginService){
    this.login = this.fb.group({
      usuario: ['', Validators.required], 
      password: ['', Validators.required]
    })
  }

   log(): void {
    console.log(this.login)

    const usuario: Usuario = {
      nombreUsuario: this.login.value.usuario,
      password: this.login.value.password
    }

    this.loginService.login(usuario).subscribe(data => {
      this.loginService.setLocalStorage(data.Usuario);
      console.log(data);
      this.router.navigate(['/dashboard']);
    }, error =>{
      this.toastr.error(error.error.message, 'Error')
      this.login.reset();
    })
  //  if(usuario.nombreUsuario === 'user' && usuario.password ==='123'){
  //   this.router.navigate(['/dashboard']);
  //   this.login.reset();
  //  }
  //  else{
  //   this.toastr.error('Usuario o contraseña incorrectos', 'Error')
  //   this.login.reset();
  //  }


  }
}
