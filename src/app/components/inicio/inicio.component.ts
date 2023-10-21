import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavigationEnd, Router, RouterModule } from '@angular/router'

@Component({
    selector: 'app-inicio',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
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
        this.audioFondo.play()
    }

    controlarAudio() {
        if (this.audioFondo.paused) {
            this.audioFondo.play()
        } else {
            this.audioFondo.pause()
        }
    }
}

