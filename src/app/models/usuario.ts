export interface Usuario {
    id:number,
    email: String,
    password: String,
    name: String,
    telefono: String,
    rol_id: number | String,
    token: String,
    status: boolean,
}
