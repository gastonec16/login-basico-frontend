import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { RegistrarseInterface } from 'src/app/interfaces/usuario.interface'
import { UsuarioService } from 'src/app/services/usuario.service'
import Swal from 'sweetalert2'

@Component({
    selector: 'app-registrarse',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './registrarse.component.html',
    styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent {
    usuarioService = inject(UsuarioService)

    usuario = {
        nombre: '',
        apellido: '',
        email: '',
        nombreUsuario: '',
        contrasenia: '',
        repetirContrasenia: ''
    }

    crearUsuario(event: SubmitEvent) {
        event.preventDefault()

        const formulario = event.target as HTMLFormElement
        const nombre = (formulario.elements.namedItem('nombre') as HTMLInputElement).value
        const apellido = (formulario.elements.namedItem('apellido') as HTMLInputElement).value
        const email = (formulario.elements.namedItem('email') as HTMLInputElement).value
        const nombreUsuario = (formulario.elements.namedItem('nombre-usuario') as HTMLInputElement)
            .value
        const contrasenia = (formulario.elements.namedItem('contrasenia') as HTMLInputElement).value
        const repetirContrasenia = (
            formulario.elements.namedItem('repetir-contrasenia') as HTMLInputElement
        ).value

        if (contrasenia != repetirContrasenia) {
            Swal.fire({
                title: 'Error',
                text: 'Las contraseñas no coinciden',
                icon: 'error'
            })
        } else if (formulario.checkValidity()) {
            const nuevoUsuario: RegistrarseInterface = {
                nombre,
                apellido,
                email,
                nombreUsuario,
                contrasenia
            }
            this.usuarioService.crearUsuario(nuevoUsuario).subscribe({
                next: (data) => {
                    if (data.nombreUsuario) {
                        Swal.fire({
                            title: 'Usuario creado',
                            text: 'Ya puede iniciar sesión',
                            icon: 'success'
                        })
                    } else {
                        Swal.fire({
                            title: 'Error',
                            text: data.message,
                            icon: 'error'
                        })
                    }
                },
                error: (err) =>
                    Swal.fire({
                        title: 'Error',
                        text: err.message,
                        icon: 'error'
                    })
            })
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Ingrese los datos faltantes',
                icon: 'error'
            })
        }
    }
}

