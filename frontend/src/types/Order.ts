export interface Order{
    _id: string;
    table: string;
    status: 'pending' | 'in production' | 'completed' |'canceled';
    products: {
        _id: string;
        quantity: number;
        product:{
        name: string;
        imagePath: string;
        price: number;
    };
    }[];
}
