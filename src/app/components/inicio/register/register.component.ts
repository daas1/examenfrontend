import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  register: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router){
    this.register = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(8)]]
    })
  }

  ngOnInit(): void{

  }

  registrar(): void{
    const usuario: Usuario={
      nombreUsuario: this.register.value.usuario,
      password: this.register.value.password
    };
    this.loading = true;
    this.usuarioService.saveUser(usuario).subscribe(data => {
      Swal.fire({
        icon: 'success',
        title: usuario.nombreUsuario + ' se registro exitosamente'
      })
      this.router.navigate(['/inicio/login']);
      this.loading = false;
    },error => {
      this.loading = false;
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'El usuario ' + usuario.nombreUsuario + ' ya existe'
      });
      this.register.reset();
    });
  }

}
