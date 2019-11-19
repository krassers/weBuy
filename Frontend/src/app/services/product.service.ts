import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private http: HttpClient) {

    }

    getById(id: string) {
        return this.http.get('/api/products/' + id).pipe(map((res:any) => {
            return res;
        }));
    }

    getAll() {
        return this.http.get('/api/products');
    }
}