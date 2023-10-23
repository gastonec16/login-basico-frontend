import { Component, signal } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { Usuario } from './interfaces/usuario.interface'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'frontend'

    usuarioVacio: Usuario = {
        id: 0,
        nombre: '',
        apellido: '',
        email: '',
        nombreUsuario: '',
        contrasenia: ''
    }

    usuarioLogueado = signal<Usuario>(this.usuarioVacio)
    estaLogueado = signal<boolean>(false)
}

