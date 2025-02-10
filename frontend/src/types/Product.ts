import { Ingredient } from "./Ingredients";

export interface Product {
        category: string;
        _id: string;
        name: string;
        description: string;
        price: number;
        imagePath: string;
        ingredients?: Ingredient[];
}
