export interface Usuario {
    id: number
    nombre: string
    apellido: string
    email: string
    nombreUsuario: string
    contrasenia: string
}

export interface RegistrarseInterface {
    nombre: string
    apellido: string
    email: string
    nombreUsuario: string
    contrasenia: string
}

export interface IniciarSesionInterface {
    nombreUsuario: string
    contrasenia: string
}
