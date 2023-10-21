import { Routes } from '@angular/router'

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./components/inicio/inicio.component').then((c) => c.InicioComponent)
    },
    {
        path: 'iniciar-sesion',
        loadComponent: () =>
            import('./components/iniciar-sesion/iniciar-sesion.component').then(
                (c) => c.IniciarSesionComponent
            )
    },
    {
        path: 'registrarse',
        loadComponent: () =>
            import('./components/registrarse/registrarse.component').then(
                (c) => c.RegistrarseComponent
            )
    }
]

