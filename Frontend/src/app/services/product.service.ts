import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    products = [];

    constructor(private http: HttpClient) {}

    getById(id: string) {
        return this.http.get('/api/products/' + id).pipe(map((res:any) => {
            return res;
        }));
    }

    getAll() {
        return this.http.get('/api/products')
        // .pipe(
        //     map((response: any) => {
        //         return response._embedded.products;
        //     })
        // );
    }

    create(product: any) {
        return this.http.post('/api/products', product); 
    }
}