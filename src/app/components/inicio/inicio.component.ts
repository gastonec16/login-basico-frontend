import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavigationEnd, Router, RouterModule } from '@angular/router'
import { AppComponent } from 'src/app/app.component'

@Component({
    selector: 'app-inicio',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
    appComponent = inject(AppComponent)

    router = inject(Router)

    audioFondo: HTMLAudioElement

    constructor() {
        this.audioFondo = new Audio()
        this.audioFondo.src = 'assets/audio/fondo.mp3'
        this.audioFondo.loop = true

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                if (event.url != '/') {
                    this.audioFondo.pause()
                }
            }
        })
    }

    ngOnInit(): void {
        if (this.appComponent.estaLogueado()) {
            this.audioFondo.play()
        } else {
            this.audioFondo.pause()
        }
    }

    controlarAudio() {
        if (this.audioFondo.paused) {
            this.audioFondo.play()
        } else {
            this.audioFondo.pause()
        }
    }

    cerrarSesion() {
        this.appComponent.usuarioLogueado.set(this.appComponent.usuarioVacio)
        this.appComponent.estaLogueado.set(false)
        this.audioFondo.pause()
    }
}

