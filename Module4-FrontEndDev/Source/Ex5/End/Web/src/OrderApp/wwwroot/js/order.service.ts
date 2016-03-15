import {Injectable} from "angular2/core";
import {IItemInfo} from "./itemInfo";
import {Http, Headers, RequestOptions, Response} from "angular2/http";
import "rxjs/Rx";

@Injectable()
export class OrderService {
    private orderEndpoint = "/api/orders/";
    private orderDetailsEndpoint = "/api/orderDetails/";

    constructor(private http: Http) {
    }

    getOrders(): Promise<IItemInfo[]> {
        var headers = new Headers();
        headers.append("If-Modified-Since", "Mon, 27 Mar 1972 00:00:00 GMT");

        return this.http.get(this.orderEndpoint, { headers: headers })
            .map((res: Response) => <IItemInfo[]>res.json())
            .toPromise();
    }

    getOrderDetails(id: number): Promise<any> {
        var headers = new Headers();
        headers.append("If-Modified-Since", "Mon, 27 Mar 1972 00:00:00 GMT");
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.orderEndpoint + id, options)
            .map((res: Response) => res.json())
            .toPromise();
    }

    updateOrderDetails(orderDetails: any): Promise<any> {
        let body = JSON.stringify(orderDetails);
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(this.orderDetailsEndpoint + orderDetails.orderDetailsId, body, options)
            .toPromise();
    }
}