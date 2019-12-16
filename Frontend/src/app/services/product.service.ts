import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { pipe } from 'rxjs';
import { Product } from '../api/product';


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

    getByStatus(status: string):Observable<any> {
        return this.http.get('/api/products/status/'+ status);
    }

    getAll(){
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get('/api/products', {headers});
    }

    create(product: Product) {
        console.log('### new Product:', product);
        return this.http.post('/api/products', product); 
    }

    update(product: Product) {
        return this.http.put('/api/products/'+ product.id, product)
    }

    delete(id) {
        return this.http.delete('/api/products/' + id);
    }
}