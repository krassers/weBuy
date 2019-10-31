package at.fhjoanneum.weBuy.service;

import org.springframework.validation.annotation.Validated;

import at.fhjoanneum.weBuy.model.Product;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Validated
public interface ProductService {

    @NotNull Iterable<Product> getAllProducts();

    Product getProduct(@Min(value = 1L, message = "Invalid product ID.") long id);

    Product save(Product product);
}