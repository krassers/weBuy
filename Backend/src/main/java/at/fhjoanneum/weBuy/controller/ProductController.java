package at.fhjoanneum.weBuy.controller;

import at.fhjoanneum.weBuy.model.Product;
import at.fhjoanneum.weBuy.service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.NotNull;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // 19.11.2019 Phil: Replaced @GetMapping with @RequestMapping => because otherwise there would be two get methods!
    // https://github.com/ryanmccormick/spring-boot-rest-best-practices/blob/master/src/main/java/com/example/controller/ContactController.java

    // List All Products
    @RequestMapping(value = "", method = RequestMethod.GET)
    public @NotNull Iterable<Product> getAllProducts() throws Throwable {
        return productService.getAllProducts();
    }

    // List One Product
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public @NotNull Product getSingleProduct(@PathVariable Long id) throws Throwable {
        return productService.getProduct(id);
    }

    
    // old code down here, replace with above code

    // @GetMapping(value = { "", "/" })
    // public @NotNull Iterable<Product> getProducts() {
    //     return productService.getAllProducts();
    // }

    // @GetMapping(value = { "", "/{id}" })
    // public @NotNull Product getProductById(@PathVariable Long id) {
    //     return productService.getProduct(id);
    // }

    @PostMapping(value = { "", "/" })
    public @NotNull Iterable<Product> saveProduct(@RequestBody Product product) {

        productService.save(product);
        return productService.getAllProducts();
    }
}