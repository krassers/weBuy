package at.fhjoanneum.weBuy.controller;

import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import at.fhjoanneum.weBuy.model.Product;
import at.fhjoanneum.weBuy.service.ProductService;

@RestController
@RequestMapping("/products")
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

    // List Pending Products
    @RequestMapping(value = "/status/{status}", method = RequestMethod.GET)
    public Iterable<Product> getProductByStatus(@PathVariable String status) throws Throwable {
        return productService.findByStatus(status);
    }

    // Update existing product
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Product updateProduct(@PathVariable Long id, @RequestBody Product product) throws Throwable {
        return productService.save(product);
    }

    // Delete existing product
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public Product deleteProduct(@PathVariable Long id) throws Throwable {
        Product product = productService.getProduct(id);
        productService.delete(id);
        return product;
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

        System.out.println("#####################supplier"+product.getSupplier());
        System.out.println("#####################supplierid"+product.getSupplierId());
        productService.save(product);
        return productService.getAllProducts();
    }

    @GetMapping("/myProducts/{userId}")
    public Iterable<Product> getMyProducts(@PathVariable long userId) {
        return productService.getMyProducts(userId);
    }
}