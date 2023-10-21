import { Injectable, inject } from '@angular/core'
import { IniciarSesionInterface, RegistrarseInterface } from '../interfaces/usuario.interface'
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    http = inject(HttpClient)

    apiBaseUrl = 'http://localhost:3000'

    crearUsuario(usuario: RegistrarseInterface) {
        return this.http.post<any>(`${this.apiBaseUrl}/usuarios`, usuario)
    }

    iniciarSesion(usuario: IniciarSesionInterface) {
        return this.http.post<any>(`${this.apiBaseUrl}/usuarios/iniciar-sesion`, usuario)
    }
}

