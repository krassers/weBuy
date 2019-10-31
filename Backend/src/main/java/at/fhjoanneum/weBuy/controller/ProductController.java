package at.fhjoanneum.weBuy.controller;

import at.fhjoanneum.weBuy.model.Product;
import at.fhjoanneum.weBuy.service.ProductService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.NotNull;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping(value = { "", "/" })
    public @NotNull Iterable<Product> getProducts() {
        return productService.getAllProducts();
    }

    @PostMapping(value = { "", "/" })
    public @NotNull Iterable<Product> saveProduct(@RequestBody Product product) {

        productService.save(product);
        return productService.getAllProducts();
    }
}