import { Injectable } from "@angular/core";
import { IProduct } from "./product";

@Injectable()
export class ProductDataService {
    getProducts(): IProduct[] {
        let products: IProduct[] = [
            {
                productId: 1,
                productName: "Leaf Rake",
                productCode: "GDN-0011",
                releaseDate: new Date(),
                description: "Leaf rake with 48-inch wooden handle.",
                price: 19.95,
                starRating: 3.2,
                imageUrl: "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                productId: 2,
                productName: "Garden Cart",
                productCode: "GDN-0023",
                releaseDate: new Date(),
                description: "15 gallon capacity rolling garden cart",
                price: 32.99,
                starRating: 4.2,
                imageUrl: "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            },
            {
                productId: 5,
                productName: "Hammer",
                productCode: "TBX-0048",
                releaseDate: new Date(),
                description: "Curved claw steel hammer",
                price: 8.9,
                starRating: 4.8,
                imageUrl: "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
            },
        ]
        return products;
    }
}