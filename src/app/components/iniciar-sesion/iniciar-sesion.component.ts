import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

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
}

