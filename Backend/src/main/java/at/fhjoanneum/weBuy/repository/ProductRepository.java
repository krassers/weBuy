package at.fhjoanneum.weBuy.repository;

import org.springframework.data.repository.CrudRepository;
import at.fhjoanneum.weBuy.model.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {
}