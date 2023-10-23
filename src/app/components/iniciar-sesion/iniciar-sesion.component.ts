import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import { UsuarioService } from 'src/app/services/usuario.service'
import { IniciarSesionInterface } from 'src/app/interfaces/usuario.interface'
import Swal from 'sweetalert2'
import { AppComponent } from 'src/app/app.component'

@Component({
    selector: 'app-iniciar-sesion',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './iniciar-sesion.component.html',
    styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent {
    usuario = {
        nombreUsuario: '',
        contrasenia: ''
    }

    usuarioService = inject(UsuarioService)
    appComponent = inject(AppComponent)
    router = inject(Router)

    iniciarSesion(event: SubmitEvent) {
        event.preventDefault()

        const formulario = event.target as HTMLFormElement
        const nombreUsuario = (formulario.elements.namedItem('nombre-usuario') as HTMLInputElement)
            .value
        const contrasenia = (formulario.elements.namedItem('contrasenia') as HTMLInputElement).value

        if (formulario.checkValidity()) {
            const credenciales: IniciarSesionInterface = {
                nombreUsuario,
                contrasenia
            }
            this.usuarioService.iniciarSesion(credenciales).subscribe({
                next: (data) => {
                    if (!data.nombreUsuario) {
                        Swal.fire({
                            title: 'Error',
                            text: data.message,
                            icon: 'error'
                        })
                    } else {
                        formulario.reset()
                        this.appComponent.estaLogueado.set(true)
                        this.appComponent.usuarioLogueado.set(data)
                        this.router.navigate(['/'])
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

