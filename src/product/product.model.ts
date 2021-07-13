export class ProductModel {
    image: string;
    title: string;
    categories: string[];
    price: number;
    oldPrice: number;
    credit: number;
    rating: number;
    characteristics: {
        [key: string]: string;
    };
    tags: string;
    description: string;
    advantages: string;
    disAdvantages: string;
    review: string[];


}
