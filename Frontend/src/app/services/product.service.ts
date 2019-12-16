import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ProductService {

    products = [];
    public headers = new HttpHeaders().set('Content-Type', 'application/json');
    

    constructor(private http: HttpClient) {}

    getById(id: string) {
        return this.http.get('/api/products/' + id).pipe(map((res:any) => {
            return res;
        }));
    }

    // getAll() {
    //     return this.http.get('/api/products', {headers: this.headers})
    //     // .pipe(
    //     //     map((response: any) => {
    //     //         return response._embedded.products;
    //     //     })
    //     // );
    // }

    getAll(){
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get('/api/products', {headers});
    }

    create(product: any) {
        return this.http.post('/api/products', product); 
    }

    update(product: any) {
        return this.http.put('/api/products/'+ product.id, product)
    }

    delete(product) {
        return this.http.delete('/api/products/' + product.id);
    }
}