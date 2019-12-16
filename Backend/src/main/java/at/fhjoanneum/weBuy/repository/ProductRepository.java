package at.fhjoanneum.weBuy.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import at.fhjoanneum.weBuy.model.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {
    public List<Product> findBySupplierId(@Param("supplierId") long id);
    public List<Product> findByCustomerId(@Param("customerId") long id);
}