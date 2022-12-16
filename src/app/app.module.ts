import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegisterComponent } from './components/inicio/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CambiarpasswordComponent } from './components/dashboard/cambiarpassword/cambiarpassword.component';
import { CuestionariosComponent } from './components/dashboard/cuestionarios/cuestionarios.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { AddtokenInterceptor } from './helpers/addtoken.interceptor';
import { PasounoComponent } from './components/dashboard/cuestionarios/nuevocuestionario/pasouno/pasouno.component';
import { PasoDosComponent } from './components/dashboard/cuestionarios/nuevocuestionario/pasodos/pasodos.component';
import { NuevapreguntaComponent } from './components/dashboard/cuestionarios/nuevocuestionario/pasodos/nuevapregunta/nuevapregunta.component';
import { NuevocuestionarioComponent } from './components/dashboard/cuestionarios/nuevocuestionario/nuevocuestionario.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BienvenidaComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CambiarpasswordComponent,
    CuestionariosComponent,
    NavbarComponent,
    LoadingComponent,
    NuevocuestionarioComponent,
    PasounoComponent,
    PasoDosComponent,
    NuevapreguntaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AddtokenInterceptor}],
  bootstrap: [AppComponent]
})
export class AppModule { }
