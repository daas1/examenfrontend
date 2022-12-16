import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CuestionarioService } from 'src/app/services/cuestionario.service';

@Component({
  selector: 'app-pasouno',
  templateUrl: './pasouno.component.html',
  styleUrls: ['./pasouno.component.css']
})
export class PasounoComponent {
  datosCuestionario: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private cuestionarioService: CuestionarioService) {
    this.datosCuestionario = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  pasoUno(): void {
    this.cuestionarioService.tituloCuestionario = this.datosCuestionario.value.titulo;
    this.cuestionarioService.descripcionCuestionario = this.datosCuestionario.value.descripcion;
    this.router.navigate(['/dashboard/nuevocuestionario/pasodos']);
  }
}
