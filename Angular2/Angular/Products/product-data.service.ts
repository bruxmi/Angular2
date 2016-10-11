import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { IProduct } from "./product";

@Injectable()
export class ProductDataService {

    private productUrl = '/api/productQuery'
    
    constructor(private http: Http) {
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    getProducts(): Observable<IProduct[]> {
        return this.http.get(this.productUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log("ALL: " + JSON.stringify(data)))
            .catch(this.handleError)
    }


    //getProducts(): IProduct[] {
    //    var a = this.http.get("").
    //    //return null;
    //    let products: IProduct[] = [
    //        {
    //            productId: 1,
    //            productName: "Leaf Rake",
    //            productCode: "GDN-0011",
    //            releaseDate: new Date(),
    //            description: "Leaf rake with 48-inch wooden handle.",
    //            price: 19.95,
    //            starRating: 3.2,
    //            imageUrl: "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    //        },
    //        {
    //            productId: 2,
    //            productName: "Garden Cart",
    //            productCode: "GDN-0023",
    //            releaseDate: new Date(),
    //            description: "15 gallon capacity rolling garden cart",
    //            price: 32.99,
    //            starRating: 4.2,
    //            imageUrl: "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    //        },
    //        {
    //            productId: 5,
    //            productName: "Hammer",
    //            productCode: "TBX-0048",
    //            releaseDate: new Date(),
    //            description: "Curved claw steel hammer",
    //            price: 8.9,
    //            starRating: 4.8,
    //            imageUrl: "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    //        },
    //    ]
    //    return products;
    //}
}