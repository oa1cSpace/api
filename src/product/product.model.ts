import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';

export class ProductCharacteristic {
    @prop()
    name: string;

    @prop()
    value: string;
}
export interface ProductModel extends Base {}
export class ProductModel extends TimeStamps{
    @prop()
    image: string;

    @prop()
    title: string;

    @prop({type: () => [String]})
    categories: string[];

    @prop()
    price: number;

    @prop()
    oldPrice: number;

    @prop()
    credit: number;

    @prop()
    rating: number;

    @prop({type: () => [ProductCharacteristic], _id: false})
    characteristics: ProductCharacteristic[];

    @prop()
    tags: string;

    @prop()
    description: string;

    @prop()
    advantages: string;

    @prop()
    disAdvantages: string;

    @prop({type: () => [String]})
    review: string[];


}
