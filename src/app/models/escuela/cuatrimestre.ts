export interface Cuatrimestre{
    id?:number
    num_cuatri:number
    periodo: Periodo
}
export enum Periodo{
    'en-abr', 
    'my-agt',
    'sept-dic'
}