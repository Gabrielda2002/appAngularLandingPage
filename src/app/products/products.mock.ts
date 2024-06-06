export const productsList:any = [

    {id: 1 , name: 'lavandina', price: 10, descrition: 'botella de 1lt'},
    {id: 2 , name: 'detergente', price: 5, descrition: 'dura 120 lavado'},
    {id: 3 , name: 'limpia vidirios', price: 7, descrition: 'cocina tranquilo'},
    {id: 4 , name: 'Quita grasa', price: 6},
    {id: 5 , name: 'perfumina', price: 2, descrition: 'olor a campo realista'}

]

export interface product{
    id: number | string;
    name: string;
    price: number;
    descrition?: string;
}