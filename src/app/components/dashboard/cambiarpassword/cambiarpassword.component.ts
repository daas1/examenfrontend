import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cambiarpassword',
  templateUrl: './cambiarpassword.component.html',
  styleUrls: ['./cambiarpassword.component.css']
})
export class CambiarpasswordComponent implements OnInit{
  cambiarpassword: FormGroup;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router){
    this.cambiarpassword = this.fb.group({
      passwordAnterior:['',Validators.required],
      nuevaPassword:['',[Validators.required, Validators.minLength(4)]]
    });
  }

  ngOnInit(): void {
    
  }

  guardarPassword():void{
    const  changePassword: any = {
      passwordAnterior: this.cambiarpassword.value.passwordAnterior,
      nuevaPassword: this.cambiarpassword.value.nuevaPassword
    };
    this.usuarioService.changePassword(changePassword).subscribe(data =>{
      Swal.fire({
        icon: 'success',
        title: data.message
      });
      this.router.navigate(['/dashboard']);
    }, error => {
      this.cambiarpassword.reset();
      Swal.fire({
        icon: 'error',
        title: 'Ooops..!',
        text: 'Password incorrecta',
      });
    });
  }

}
