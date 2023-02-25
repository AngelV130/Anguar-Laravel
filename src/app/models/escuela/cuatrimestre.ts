export interface Cuatrimestre{
    id?:number
    num_cuatri:number
    periodo: Periodo | string
}

export enum Periodo{
    EnAbr = 'en-abr', 
    MyAgt = 'my-agt',
    SeptDic = 'sept-dic'
}
