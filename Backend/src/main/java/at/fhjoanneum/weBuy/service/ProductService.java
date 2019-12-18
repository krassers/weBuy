package at.fhjoanneum.weBuy.service;

import java.util.List;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.springframework.validation.annotation.Validated;

import at.fhjoanneum.weBuy.model.Product;

@Validated
public interface ProductService {

    @NotNull Iterable<Product> getAllProducts();

    Product getProduct(@Min(value = 1L, message = "Invalid product ID.") long id);

    List<Product> findByStatus(String status);

    Product save(Product product);

    public Iterable<Product> getMyProducts(long id);
    
    void delete(Long id);
}