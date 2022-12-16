import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loading = false;
login: FormGroup;

constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router, private loginService: LoginService){
  this.login = this.fb.group({
    usuario:['', Validators.required],
    password:['', Validators.required]
  })
}

log():void{
  const usuario: Usuario={
    nombreUsuario: this.login.value.usuario,
    password:this.login.value.password
  }
  this.loading= true;
  this.loginService.login(usuario).subscribe(data =>{
    this.loading = false;
    this.loginService.setLocalStorage(data.token);
    this.router.navigate(['/dashboard']);
  }, error => {
    this.loading = false;
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Usuario o contraseña invalidos'
    });
    this.login.reset();
  })
  // setTimeout(()=>{
  //   if(usuario.nombreUsuario === 'david' && usuario.password === 'admin123'){
  //     this.login.reset();
  //     this.router.navigate(['/dashboard']);
  //   }else{
  //     this.toastr.error('Credenciales invalidas', 'Error');
  //     this.login.reset();
  //   }
  //   this.loading= false;
  // },1000)

}
}
